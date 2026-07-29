# Verification harness (Phase C)

Server-renders a skeleton at 1280×720 so it can be diffed against its real
render in `atlas/thumbs/`. Node-only; no CDN needed.

```bash
cd atlas/verify
npm init -y >/dev/null
npm i react@18.3.1 react-dom@18.3.1 @babel/core @babel/preset-env @babel/preset-react @babel/register
node render.js fin-statement theme-irmaco        # -> slide.html
CHROME=$(ls /opt/pw-browsers/chromium-*/chrome-linux/chrome | head -1)
"$CHROME" --headless --no-sandbox --disable-gpu --window-size=1280,720 \
  --hide-scrollbars --screenshot=shot.png "file://$PWD/slide.html"
```

`node_modules/`, `slide.html`, `shot.png` are build artifacts — do not commit.
Add a demo by extending the `demos` map in `render.js`. Log each verification in
`atlas/recreation-log.md`.

## Rebuilding the runtime bundle

After adding/editing components, regenerate `_ds_bundle.js` + `_ds_manifest.json`
so the browser runtime (`window.KumulusPartnersDesignSystem_533273`) and
`ui_kits/` pick them up:

```bash
NODE_PATH=./node_modules node ../verify/build-bundle.js   # from a dir with @babel/core
```

`build-bundle.js` transpiles every `components/*/*.jsx` (two-pass Babel: JSX →
`React.createElement`, then strip `import React`, rewrite sibling imports to
`__ds_scope.<name>`, strip `export`), emitting the same `format:4` bundle.
Verified by loading the bundle with React UMD in headless Chromium and rendering
a slide (existing SlideFrame + new FinancialStatement) — DOM content confirmed.
