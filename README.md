# Slide Atlas — Sessions 1, 2 & 2b (extraction, classification, layout patterns)

Full index of every source slide across the three reference decks. Drives
Session 2 (classification + clustering) and downstream template routing.

## Files
- `source-slides.json` — the merged atlas, **307 entries** (one per slide).
- `index.html` — searchable browser (filters: deck, section, role, viz; free-text search). Open it to explore.
- `bones-text.json` / `torino-text.json` / `longtpl-text.json` — raw per-slide text.
- `bones-struct.json` / `torino-struct.json` — per-page vector/image op counts.

## Decks
| Deck | Target | Industry | Slides | Aspect | Role (per Plan §4) |
|---|---|---|---|---|---|
| Project Bones | BeMedico | Medical-device distribution (Benelux) | 67 | 4:3 | Modern execution quality — primary style reference |
| Project Torino | Irmaco | Industrial dust-explosion / process-fire safety | 82 | 4:3 | Dense/technical edge cases |
| Long template | — (placeholders) | — | 158 | 16:9 | Structural breadth — layout library |

Two distinct industries (medical distribution vs industrial safety) plus a
blank layout library — good coverage for the industry-neutral goal.

## Atlas entry fields
`id` (BON-/TOR-/LTP-nn), `deck`, `page`, `section`, `title`, `role`
(cover / disclaimer / contents / section-divider / content / appendix-ref),
`density` (low/medium/high by word count), `words`, `struct` (image + vector
op counts, or chart/table counts for the PPTX), `viz` (chart-or-diagram-heavy /
some-vector / text-image / etc.), `excerpt` (first 300 chars), and
`family` / `subfamily` / `canonical` = **null, to be filled in Session 2**.

## Section spines (derived from each deck's ToC + divider pages)
- **Bones:** Chrome 1-3 · Exec summary 4-11 · Market 12-20 · Business overview 21-40 · Growth strategy 41-51 · Financials 52-63 · Appendix 64-67.
- **Torino:** Chrome 1-4 · Exec summary 5-11 · Market 12-17 · Business overview 18-44 · Organization 45-48 · Business model 49-53 · Growth strategy 54-61 · Financials 62-73 · Appendix 74-82.
- **Long template:** single "Layout library" bucket (placeholder titles); classify by structure in S2. Contains 63 chart slides, 5 table slides.

## Method & limitation
Text + structure extracted with pdf.js (PDFs) and direct OOXML parsing (PPTX)
in `run_script`. **Full-resolution page renders** for all 307 slides were
supplied by the user (`atlas/thumbs/{bones,torino,ltp}/`) and are wired into
the browser and every atlas entry's `thumb` field.

## Next (Session 3)
Writing corpus + evidence model. See Plan §7–8.

## Session 2b — layout patterns (done)
Full visual pass over all 158 long-template slides (reviewed as montages, every slide seen). The long template is a **structural** reference (its content is placeholder "[x]"), so it feeds layout, not language.
- **`routing/layout-patterns.json`** — **40 named layout archetypes** grouped as chrome / multi-column / kpi / chart / table / process / diagram / narrative / geographic / product / case-study. Each has a recipe, item-count range, and exemplar slide numbers. This is the "idea box" for *how* to arrange a dense slide.
- **`atlas/layout-patterns.html`** — visual gallery of all 40 patterns with exemplar thumbnails.
- **128 of 158** long-template slides tagged with a `layoutPattern` id in `source-slides.json` (the 30 untagged are placeholder permutations of already-named patterns).
- The two atlas views cross-link (browser ↔ gallery).

Notable recurring constructions: the KPI-tiles+combo-chart "at a glance" (LP-KPI-COMBO), the field/description/impact harvey-ball table (LP-FIELD-DESC-IMPACT), chevron process rows, box-and-connector process maps, flywheels/funnels/pyramids, 2×2 positioning matrix, org/ownership trees, geographic map+table, and the Context/Approach/Result case study.

## Session 2 — classification + clustering (done)
- **`routing/taxonomy.json`** — controlled vocabulary: 19 families + subfamilies (Plan §6), plus orthogonal descriptors (layoutGeometry, evidenceType, dataShape, density, canonicalStatus).
- **All 149 real-IM slides hand-classified** into exactly one family/subfamily (title+text+thumbnail driven). None left as generic "content". 18 families populated.
- **158 long-template slides** tagged by structure into `family: layout-library` + a layoutGeometry subfamily (`chart-plus-commentary`, `table`, `grid`, `multi-panel`, `text-layout`, `full-bleed`), `canonical: placeholder`. Their placeholder titles mean semantic classification isn't meaningful; they are the structural-breadth reserve. **A full visual layout-naming pass on the long template is deferred to an optional Session 2b** if we want named layout variants beyond the real-IM canon.
- **`atlas/source-map.json`** — 64 clusters (family/subfamily) across the two real IMs; 47 are template candidates, 33 of those span/repeat with 2+ members. Each cluster names a **canonical** exemplar, chosen by deck preference (Bones > Long template > Torino > Spark) then density. Canonical picks lean Bones for modern quality; Torino wins only where it is the sole or denser source (technical-product, service-lines, recurring-model, value-chain).
- **`atlas/index.html`** now filters by deck / family / subfamily / canonical-only; the 64 canonical slides are outlined in blue.

Completion condition met: no slide left as generic content; every real-IM cluster has one proposed canonical.

## Original Session 1 notes below
