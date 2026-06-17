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
    console.log("ℹ Thumbnail generation: skipped (sharp not available)");
    writeFileSync(path.join(OUT, "thumbs.js"), `window.TS_THUMBS = {};`, "utf8");
    return;
  }

  console.log("⏳ Generating thumbnails + LQIP placeholders…");
  const thumbDir = path.join(OUT, "thumbs");
  mkdirSync(thumbDir, { recursive: true });

  // Recursively collect all images under assets/work
  const imageExts = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  function walkDir(dir) {
    let files = [];
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) files = files.concat(walkDir(full));
      else if (imageExts.has(path.extname(entry.name).toLowerCase())) files.push(full);
    }
    return files;
  }

  const assetsWorkDir = path.join("assets", "work");
  let allImages;
  try {
    allImages = walkDir(assetsWorkDir);
  } catch (err) {
    console.log("⚠ Could not read assets/work, skipping thumbs:", err.message);
    writeFileSync(path.join(OUT, "thumbs.js"), `window.TS_THUMBS = {};`, "utf8");
    return;
  }

  const thumbsMap = {};
  let count = 0;

  for (const imgPath of allImages) {
    try {
      // Build a safe filename from the relative path
      const rel = path.relative(".", imgPath).replace(/\\/g, "/");   // e.g. assets/work/oyuncak-sektoru/vale/v1.png
      const safeName = rel.replace(/[/\\]/g, "_").replace(/\.[^.]+$/, "");

      // Generate 480w thumb
      const thumb480Name = `${safeName}_480.webp`;
      await sharp(imgPath)
        .resize({ width: 480, withoutEnlargement: true })
        .webp({ quality: 72 })
        .toFile(path.join(thumbDir, thumb480Name));

      // Generate 320w thumb
      const thumb320Name = `${safeName}_320.webp`;
      await sharp(imgPath)
        .resize({ width: 320, withoutEnlargement: true })
        .webp({ quality: 65 })
        .toFile(path.join(thumbDir, thumb320Name));

      // Generate LQIP — tiny 16px wide blurred WebP as base64
      const lqipBuf = await sharp(imgPath)
        .resize({ width: 16 })
        .blur(2)
        .webp({ quality: 20 })
        .toBuffer();
      const lqipDataUri = `data:image/webp;base64,${lqipBuf.toString("base64")}`;

      thumbsMap[rel] = {
        thumb480: `thumbs/${thumb480Name}`,
        thumb320: `thumbs/${thumb320Name}`,
        lqip: lqipDataUri,
      };
      count++;
    } catch (err) {
      // Skip files sharp can't process (e.g. corrupted)
      console.log(`  ⚠ Skipped ${imgPath}: ${err.message}`);
    }
  }

  // Write thumbs.js
  const jsContent = `window.TS_THUMBS = ${JSON.stringify(thumbsMap, null, 2)};`;
  writeFileSync(path.join(OUT, "thumbs.js"), jsContent, "utf8");
  console.log(`✓ Generated ${count} thumbnail sets + LQIP → dist/thumbs/`);
}

await generateThumbs();

console.log("\n✓ Build complete → dist/ (no runtime Babel; React/JSX pre-compiled)");
