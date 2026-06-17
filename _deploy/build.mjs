// Production build — pre-compiles JSX to plain JS with esbuild. NO runtime Babel.
// Output goes to dist/, which is what Netlify serves (see netlify.toml).
import * as esbuild from "esbuild";
import { rmSync, mkdirSync, cpSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
// sharp import is dynamic to allow `npm install` before running build in different environments
let sharp;
try {
  // eslint-disable-next-line node/no-extraneous-import
  sharp = (await import("sharp")).default;
} catch (err) {
  sharp = null;
}

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

// 5. Generate thumbnails (WebP) and LQIP placeholders for images under assets/work
async function generateThumbs() {
  if (!sharp) {
    console.log("sharp not installed — skipping thumbnail generation");
    return;
  }
  const srcRoot = "assets/work";
  const outRoot = path.join(OUT, "assets", "work");
  const thumbs = {};

  async function walk(dir) {
    const files = readdirSync(dir, { withFileTypes: true });
    for (const fi of files) {
      const p = path.join(dir, fi.name);
      if (fi.isDirectory()) await walk(p);
      else if (/\.(jpe?g|png)$/i.test(fi.name)) {
        const rel = path.relative("assets", p).replace(/\\/g, "/");
        const inPath = p;
        const outDir = path.join(outRoot, path.relative(srcRoot, path.dirname(p)));
        try { mkdirSync(outDir, { recursive: true }); } catch (e) {}
        const base = path.basename(fi.name).replace(/\.(jpe?g|png)$/i, "");
        const thumb320 = `${base}.thumb-320.webp`;
        const thumb480 = `${base}.thumb-480.webp`;
        const inFull = path.join("assets", path.relative("assets", p)).replace(/\\/g, "/");
        const out320 = path.join(outDir, thumb320);
        const out480 = path.join(outDir, thumb480);
        // produce webp thumbs
        try {
          await sharp(inPath).resize({ width: 320 }).webp({ quality: 80 }).toFile(out320);
          await sharp(inPath).resize({ width: 480 }).webp({ quality: 80 }).toFile(out480);
          // produce tiny LQIP data-uri (width 20)
          const buf = await sharp(inPath).resize({ width: 20 }).blur(1).webp({ quality: 50 }).toBuffer();
          const lqip = `data:image/webp;base64,${buf.toString("base64")}`;
          const webRel320 = path.relative(OUT, out320).replace(/\\/g, "/");
          const webRel480 = path.relative(OUT, out480).replace(/\\/g, "/");
          thumbs[inFull] = { thumb320: webRel320, thumb480: webRel480, lqip };
        } catch (err) {
          // ignore individual failures
          // console.warn("thumb failed", p, err);
        }
      }
    }
  }

  await walk(srcRoot);
  // write thumbs mapping as a small JS file to be consumed at runtime
  const outJs = `window.TS_THUMBS = ${JSON.stringify(thumbs, null, 2)};`;
  writeFileSync(path.join(OUT, "thumbs.js"), outJs, "utf8");
  console.log(`✓ Generated ${Object.keys(thumbs).length} thumbnails`);
}

await generateThumbs();

// Ensure thumbs.js is copied into dist root so HTML can load it if needed

console.log("\n✓ Build complete → dist/ (no runtime Babel; React/JSX pre-compiled)");
