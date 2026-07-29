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
