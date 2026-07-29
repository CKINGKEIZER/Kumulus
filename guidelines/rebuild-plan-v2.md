# Kumulus IM Design System — REBUILD PLAN v2 (the "do it in detail" plan)

Written after the v1 system was judged unusable. This plan exists because the
previous build failed on the things that actually matter. It is deliberately
exhaustive. Nothing here is optional and nothing is "roughly".

---

## 0. Why v1 failed (root cause — read before anything)

1. **Body font size was not enforced.** The house rule is ONE size for all
   non-title text: **Source Sans Pro 9.5pt**. v1 shipped a type scale with ~8
   content sizes (10/11/12.5/13px + more). Every slide therefore looked "web",
   not IM.
2. **The 170-slide long template was never used.** It is the single most
   important asset: ~170 already-perfect slide structures and building blocks.
   v1 documented it in JSON and then hand-wrote trivial layouts from scratch
   instead of reproducing those structures. Unforgivable.
3. **Slides were empty.** Real IM slides are *cleanly filled* — multiple
   coordinated structures per slide (a KPI band + a labelled chart + a panel of
   bullets + a callout + a footnote), edge to edge. v1 produced one bullet list
   + one chart + a void.
4. **Floating / invented numbers.** v1 dropped ungrounded figures onto slides
   like an unprompted chatbot. Every number must be a real input or `[x]`.
5. **Margins, shadows, rules ignored in practice.** The intern-manual specs
   were written into tokens but then not honoured by the components/samples.
6. **The generator has no real structures to reach for**, so "make a key
   investment highlights slide" returns a near-copy of the one bad sample.

**Acceptance bar for v2 (definition of done):** place a v2-generated slide next
to the real render it is based on; at slide scale they are **indistinguishable**
in structure, density, margins, type sizing, colour discipline and alignment.
If a slide does not pass that side-by-side test, it is not done.

---

## PHASE A — Ground truth (measure, never guess)

Everything in v2 is derived from pixel-measurement of the real renders in
`atlas/thumbs/` (bones 67, torino 82, ltp 158), not from memory or thumbnails.

**A1. Establish the canvas ↔ point mapping.**
- IM slides are 16:9 = 13.333in × 7.5in = **960pt × 540pt** design units.
- Working canvas 1280×720 → **1px = 0.75pt**, i.e. **1pt = 1.3333px**.
- Therefore the ONLY legal text sizes (long-format IM), computed not guessed:
  - Slide title **14pt = 18.7px** (currently wrongly 22px)
  - **Body / everything = 9.5pt = 12.67px** (bullets, labels, table cells,
    panel headers, section-bar labels, column heads, chart labels, KPI captions)
  - Footnotes / sources **7pt = 9.33px**
  - Hero KPI figure — the ONE explicit exception, a defined large size
  - (Regular-format pitch variant: title 18pt, subtitle 16pt, body 9pt.)
- Delete every other `--fs-*`. If a design needs an in-between size, the answer
  is no.

**A2. Measure the real geometry from renders (script, per slide sampled):**
- Left/right margin (already measured: **0.53cm ≈ 20px**), title baseline,
  title-rule position + weight, footer rule position, footer band height,
  gutter widths, panel header band height, bullet indent + square size,
  inter-bullet spacing, KPI band height, chart plot heights.
- Sample ≥6 slides per deck; take the mode. Write results to
  `atlas/measured-geometry.json`. Tokens are set from THIS file.

**A3. Extract the real palette + shadow per deck** (BeMedico purple ramp,
Torino navy) by sampling fills from renders; confirm the intern-manual shadow
(60% transparency, 5pt blur, 0 offset) and reproduce exactly.

Deliverable A: `atlas/measured-geometry.json` + corrected `tokens/*` (single
type scale, real margins, real shadow). Nothing else proceeds until the type
scale is collapsed to 4 sizes.

---

## PHASE B — The Structure Library (the 170-slide payoff)

This is the heart of v2 and the part v1 skipped. The long template is a library
of **~170 layout structures and building blocks**. We reproduce them as real,
composable layout primitives — not prose descriptions.

**B1. Full-resolution pass, one slide at a time.** For each of the 158
long-template slides (and the distinctive real-IM structures), at full size,
record: the exact grid (columns/rows, spans), every box type, header treatment,
connector/flow, chart/table type, and how the space is divided edge-to-edge.
Output: `atlas/structures.json` — one entry per structure with a precise
geometry spec (grid template, gaps, band heights in px), not a vibe.

**B2. Implement each recurring structure as a `SlideStructure` component**
(a layout skeleton with labelled slots), e.g.:
- `KpiBandComboChart` (KPI tiles row + stacked combo chart + donut inset)
- `ThreePanelHeaderColumns` (3 grey-header columns, evidence row beneath)
- `FieldDescriptionImpact` (vertical tab + rows of field/description/harvey-ball)
- `ChevronProcessWithDetail`, `TimelinePhased`, `Matrix2x2WithProfile`,
  `WaterfallWithCommentary`, `OrgTree`, `Funnel`, `Flywheel`, `GeoMapWithTable`,
  `ContextApproachResult`, `CapabilityMatrix`, `FinancialStatementWithMarkers`,
  … one per recurring long-template structure (target: 30–45 skeletons).
- Each skeleton hard-codes the correct grid, gaps, header bands, and margins
  from Phase A, and exposes named slots. Content fills the slots; the STRUCTURE
  is fixed and correct by construction. This is what guarantees "cleanly filled,
  multiple structures, right margins" — you cannot produce an empty lopsided
  slide from a skeleton that defines the whole grid.

**B3. Density contract.** Each skeleton declares how many slots it expects and
enforces that they are filled (a skeleton with an empty slot is invalid). No
more "one bullet list + a void."

Deliverable B: `components/structures/*` (30–45 skeletons) + a visual gallery
`atlas/structures.html` showing each skeleton beside its long-template
exemplar(s).

---

## PHASE C — Recreation gauntlet (prove it, slide by slide)

Pick **10 real slides** spanning the archetypes (at-a-glance, timeline,
investment highlights, market size, competition matrix, business model, customer
concentration, org, revenue chart, financial statement). For each:
1. Open the real render at full size.
2. Rebuild it from a Phase-B skeleton + Phase-A tokens.
3. Screenshot mine at 1280×720, place beside the render, diff by eye against a
   checklist (margins, type sizes all 9.5pt, densities, alignment, colour
   discipline, shadow, footer chrome, footnotes).
4. Iterate until indistinguishable. **Do not advance to the next slide until the
   current one passes.** Log each in `atlas/recreation-log.md` with both images.

This replaces v1's habit of building breadth-first junk. Ten passing
recreations = ten proven skeletons + calibrated tokens.

---

## PHASE D — Content & numbers discipline

- **No invented numbers, ever.** A slide is generated from a `DealProfile` +
  a `facts[]` set (evidence schema). Missing value → `[x]` / `[-]`, never a
  plausible-looking fabrication.
- **Writing** stays governed by the existing corpus/engine, but every claim
  traces to a fact and obeys the adjective classes + repetition rules.
- **Footnotes mandatory** where data is shown; 7pt grey, numbered.

---

## PHASE E — The generator / routing (so "make an X slide" is right)

- `routing/template-registry.json` is rewritten so each template points to a
  **Phase-B skeleton** (not a hand-written sample) + the writing recipe + the
  required facts.
- "Make a key investment highlights slide" → selects the `NumberedHighlights`
  or `HeroArcHighlights` skeleton, demands 4–6 grounded highlights each with a
  visual slot, fills them, applies tokens. It can no longer emit a sparse
  one-off, because the skeleton defines a full, dense grid.
- Kill/replace the old `ui_kits/im-slides/*` and `templates/im-deck` samples so
  the generator can never regurgitate them again.

---

## PHASE F — Enforcement (make violations impossible, not just documented)

- **Type guard:** remove all non-canonical `--fs-*`. Components reference only
  `--fs-title` / `--fs-body` / `--fs-note` / `--fs-kpi`. An adherence lint flags
  any px font-size literal.
- **Margin guard:** the `SlideFrame` owns the 0.53cm margins; skeletons render
  inside it and cannot override.
- **Density guard:** skeletons validate filled slots.
- **Review checklist** (governance.md) run on every output.

---

## Execution order (session by session, no shortcuts)

- **S-A:** Phase A — measurement script + collapse type scale to 4 sizes + real
  margins/shadow. (Foundational; everything else depends on it.)
- **S-B1/B2/B3:** Phase B — structures.json from a real full-size pass, then
  build skeletons in batches (~10–15 per session), each verified against its
  exemplar. (2–3 sessions.)
- **S-C:** Phase C — the 10-slide recreation gauntlet, side-by-side. (1–2
  sessions.)
- **S-D/E:** wire the generator to skeletons + facts; remove old samples.
- **S-F:** enforcement guards + final governance.

## What I need from you (to hit the bar, not just approach it)
1. **The Kumulus/deal house icon set** and **real transparent-PNG logos** — the
   biggest remaining "AI" tell; skeletons will slot them directly.
2. Confirmation of the **title point size** for long-format IMs (I'm using 14pt;
   tell me if it's different).
3. Confirm the **intern-manual note size** (I'm using 7pt).

## The promise
No more quick HTML with margins thrown away. Every v2 slide is built from a
measured skeleton, filled densely, typed at one size, and validated against a
real render before I call it done.
