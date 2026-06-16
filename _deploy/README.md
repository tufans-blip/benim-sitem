# Tufan Sezer — Portfolio (production, Netlify-ready)

> **Hızlı bakış (terminal gerekmez):** `preview.html` dosyasına çift tıkla —
> tek dosyalık, çevrimdışı çalışan sürüm. (Logo şeridi yalnızca
> **"Figür · Oyuncak Sektörü"** filtre sekmesinde görünür.)
> `index.html` ise üretim sürümüdür ve `npm run build` ister (aşağıya bak).

Static site. **No runtime Babel** — the JSX is pre-compiled to plain JavaScript
by [esbuild](https://esbuild.github.io/) at build time. `index.html` only
references compiled `js/*.js` + `styles.css`.

```
.
├── index.html          ← entry (loads styles.css + js/*.js, no Babel)
├── styles.css          ← design-system entry (imports tokens/*)
├── tokens/             ← color / type / spacing / effects / fonts
├── _ds_bundle.js       ← compiled design-system components (plain JS)
├── data.js             ← portfolio content (plain JS, sets window.TS_DATA)
├── *.mp4               ← work videos
├── assets/             ← images
├── src/                ← JSX sources (compiled by the build, NOT shipped)
│   ├── portfolio-app.jsx
│   ├── tweaks-panel.jsx
│   └── app-root.jsx
├── build.mjs           ← esbuild build → dist/
├── netlify.toml        ← Netlify build config
└── package.json
```

The published output is the **`dist/`** folder (created by the build).

---

## Deploy to Netlify

### Option A — Git (recommended, builds in Netlify's cloud)
1. Push this folder to a GitHub/GitLab repo.
2. Netlify → **Add new site → Import an existing project** → pick the repo.
3. Build settings are read from `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy.** Netlify compiles the JSX (no Babel) and serves `dist/`.

### Option B — Netlify CLI
```bash
npm install
npm install -g netlify-cli
npm run build          # → produces dist/  (no Babel, pre-compiled JS)
netlify deploy --prod --dir=dist
```

### Option C — Drag-and-drop (zero Git)
Netlify's drag-and-drop **does not run a build**, so build locally first,
then drop the resulting `dist/` folder onto https://app.netlify.com/drop :
```bash
npm install
npm run build          # → dist/
```
Drag the **`dist/`** folder (not this whole folder) into the drop zone.

---

## Run locally
```bash
npm install
npm run build
npx serve dist         # open the printed http://localhost:3000
```

## Why the old build showed a white page
The previous version transpiled JSX in the browser with **Babel Standalone**
loaded from a CDN with Subresource-Integrity (`integrity=…`) hashes. If the CDN
bytes don't match the hash (or the CDN request is blocked), the script is
rejected and nothing renders — a white screen. This build removes Babel from the
runtime entirely: the JSX is compiled ahead of time, and React is loaded from
its production builds.
