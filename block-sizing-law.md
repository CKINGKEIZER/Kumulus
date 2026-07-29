# BLOCK SIZING LAW — read before building or indexing anything

The single rule the v1 build broke. **Building blocks have FIXED, optimised
dimensions. You NEVER stretch a block to fill white space.** You combine
fixed-size lego and anchor each to a CORNER. Leftover white space is filled by
adding another fixed block — or left white — never by expanding a block.

## Why this matters (the failure it prevents)
A 6×2 lego does not become an 8×8 lego. My test slide took the 6 KPI boxes and
the gray panel and *expanded* them to fill the slide → oversized figures, a
gray box stretched across the full width. That is not how these slides are
built. Blocks keep their real size; the layout tessellates them.

## The working figure (content region)
- **32 cm × 14 cm** = **~1210 px × 529 px** at 37.8 px/cm (1280px = 33.87cm slide).
- Blocks are placed by CORNER anchor inside this figure. Never centre a block.

## Measured blocks (exact, from the real template — pixels at 37.8px/cm)
### KPI box grid (the six boxes)
- Each box: **3.61 cm × 1.27 cm = 136 px × 48 px**. FIXED. Do not resize.
- Arrangement: **3 columns × 2 rows**, small gap (~6px) → grid ≈ **421 px × 102 px**.
- Anchor: **TOP-LEFT corner** of the figure.
- Text inside stays 9.5pt (value can be the hero-KPI size); the box does NOT
  grow to fit text — text fits the box.

### Gray dashboard box (the 3-graph panel)
- Size: **~20 cm × 7 cm = 756 px × 265 px**. FIXED height and width.
- Anchor: **BOTTOM-RIGHT corner**, aligned precisely to the figure edge.
- Contains **3 graphs** side by side (e.g. donut | stacked bars | line), each with
  a small-caps 9.5pt header, separated by thin rules.
- **Record its "exit widths":** it occupies the right 756px; the remaining
  **~454 px on the left** is a docking slot another fixed block fills. Note both
  the block's width AND the leftover width so blocks tessellate cleanly.

## How to index every block from here on (the required detail)
For EACH block, record:
1. **Fixed size in px** (from cm × 37.8), width AND height. Not "spans 4/12".
2. **Corner anchor** (top-left / top-right / bottom-left / bottom-right) — never centre.
3. **Exit widths / leftover slot** it leaves on the figure, so it can be matched
   with a neighbouring block.
4. Internal grid (how many sub-cells, their fixed sizes) at 9.5pt.
5. The rule: text fits the block; the block never grows to fit text or to fill a gap.

## Layout procedure (corrected)
1. Start with the empty 1210×529 figure.
2. Drop fixed blocks anchored to corners (KPI grid top-left, gray panel bottom-right, etc.).
3. If white space remains, ADD another correctly-sized block into it — do NOT
   scale existing blocks. If nothing fits, the white space stays (real slides
   have breathing room; they do not stretch boxes to eliminate every gap).
4. Verify each block is at its real px size against the source render.
