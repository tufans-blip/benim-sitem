// Production build — pre-compiles JSX to plain JS with esbuild. NO runtime Babel.
// Output goes to dist/, which is what Netlify serves (see netlify.toml).
import * as esbuild from "esbuild";
import { rmSync, mkdirSync, cpSync, readdirSync } from "node:fs";

const OUT = "dist";

// 1. Clean output
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

// 2. Transpile each source file independently (JSX -> React.createElement).
//    bundle:false keeps the load order / window-global wiring identical to dev,
//    so React, ReactDOM and the design-system bundle stay external <script> tags.
await esbuild.build({
  entryPoints: [
    "src/portfolio-app.jsx",
    "src/tweaks-panel.jsx",
    "src/app-root.jsx",
  ],
  outdir: `${OUT}/js`,
  // bundle+iife wraps each file in its own scope so top-level names
  // (App, Root, wrap…) don't collide across the separate <script> tags.
  // There are no ES imports — the files communicate purely via window globals.
  bundle: true,
  format: "iife",
  loader: { ".jsx": "jsx" },
  jsx: "transform",
  jsxFactory: "React.createElement",
  jsxFragment: "React.Fragment",
  minify: true,
  legalComments: "none",
  target: ["es2019"],
  logLevel: "info",
});

// 3. Copy static assets verbatim into dist/
const staticFiles = ["index.html", "styles.css", "_ds_bundle.js", "data.js"];
for (const f of staticFiles) cpSync(f, `${OUT}/${f}`);
cpSync("tokens", `${OUT}/tokens`, { recursive: true });
cpSync("assets", `${OUT}/assets`, { recursive: true });

// 4. Copy every video at the project root
for (const f of readdirSync(".")) {
  if (f.endsWith(".mp4") || f.endsWith(".webm")) cpSync(f, `${OUT}/${f}`);
}

console.log("\n✓ Build complete → dist/ (no runtime Babel; React/JSX pre-compiled)");
