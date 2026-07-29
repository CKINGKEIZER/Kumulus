# THE CANVAS FRAME — the white sheet every slide is built inside

This is the fixed base. Building blocks ("lego") are placed **inside the content
region** defined here. Nothing is ever hand-positioned outside it. All numbers
are exact and measured from the real IM renders — not guessed.

## Unit mapping
- Canvas: **1280 × 720 px** = 16:9 = **960 × 540 pt** (PowerPoint design units).
- **1 pt = 1.3333 px** · **1 cm = 37.8 px** · **1 px = 0.75 pt**.

## Type (ONLY these sizes exist)
| Role | pt | px @1280 | notes |
|---|---|---|---|
| Slide title | 14 | **18.7** | Merriweather, sentence case. Long-format IM. |
| **Body — EVERYTHING else** | **9.5** | **12.7** | Source Sans Pro. Bullets, labels, table cells, panel headers, section-bar labels, column heads, chart labels, KPI captions. |
| Footnote / source | 7 | 9.3 | grey |
| Hero KPI figure | — | (defined per block) | the ONLY large exception |
No other font size may appear anywhere. (Regular-format pitch: title 18pt, subtitle 16pt, body 9pt.)

## The frame zones (exact px, y from top)
```
0 ────────────────────────────────────────── 1280
│  ← 20px margin            content            20px →
│                                                     
24  TITLE ZONE  (title baseline ~24–46; black 0.5pt rule at y≈70)
70  ── title rule (black, 0.5pt) ──────────────
│                                                     
84  ┌─────────── CONTENT REGION ───────────┐   ← the white space to fill
│   │                                       │
│   │   x: 20 → 1260   (width 1240px)        │
│   │   y: 84 → 672    (height 588px)        │
│   │                                       │
672 └───────────────────────────────────────┘
678  ── footer rule (grey, 0.25pt) ──────────
│    FOOTER ZONE (height ~42px):
│    left: Kumulus mark + "Project X | Month Year" / confidential
│    centre: footnote (7pt grey)
│    right: section page-tabs + target logo + page number
720 ──────────────────────────────────────────
```

### Fixed values (tokens)
- Page margin L/R: **20px (0.53cm)** — `--slide-margin-x`
- Title zone top: **24px (0.63cm)** — `--slide-margin-top`
- Title rule: black **0.5pt (≈1px)** at y≈70 — `--rule-title`
- **Content region: x 20→1260 (1240px) · y 84→672 (588px)**
- Footer zone height: **42px (1.1cm)** — `--slide-footer-h`
- Footer rule: grey **0.25pt** at y≈678 — `--rule-separator`
- All other separators inside content: grey 0.25pt
- Shadow (floating imagery only): 60% transparency, 5pt blur, 0 offset — `--shadow-house`

## The content grid (how lego blocks are placed)
The content region is a **12-column grid**, 1240px wide:
- Column = ~86.7px, **gutter = 16px** (11 gutters). Blocks span whole columns.
- Common splits: 2-col = 6+6, 3-col = 4+4+4, 4-col = 3+3+3+3, sidebar = 8+4 or 9+3.
- Vertical: blocks stack with a **16px row gap**; a slide is "cleanly filled"
  when the blocks tile the full 1240×588 region with no orphan void.
- Panel header band height: **~28px**; KPI band height: **~72px** (measured,
  refined in Phase A).

## The rule
A slide is: **title (14pt) + rule → content region tiled edge-to-edge with
building blocks (all text 9.5pt) → footer chrome.** You never invent layout;
you choose blocks from the catalog and drop them into the grid until the 588px
content height is filled. If space is left over, add a block or enlarge one —
never leave a void, never shrink text below 9.5pt.
