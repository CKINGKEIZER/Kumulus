# Recreation log (Phase C-style verification of G3 skeletons)

Each entry: a skeleton rebuilt from primitives + tokens, server-rendered at
1280×720 (see `atlas/verify/`), and diffed by eye against its real render.
A skeleton is not "done" until structure, density, margins and type sizing are
indistinguishable from the exemplar.

---

## STR-FIN-STATEMENT-COMMENTARY — vs TOR-64 (Historical – reported P&L)

**Built:** `components/structures/FinancialStatement.jsx` composing
`FinancialTable` (existing) + new `NumberedCommentary` rail, inside `SlideFrame`.
Demo data = TOR-64 rebuilt (`atlas/verify/render.js`, demo `fin-statement`).

**Structure / density / type — PASS.** Reproduces: €k corner cell, period
header cells, indented italic sub-rows (Projects / Installed base), bold
subtotal bands (Revenue / Gross profit / EBITDA), parenthesised negatives,
numbered row markers keyed to a boxed numbered-commentary rail, italic KPI
block, 7pt footnote. Body tiles the content region table-left / commentary-
right with no void. All text one body size + the serif title.

**Findings (not component bugs — logged, not buried):**
1. **`.theme-irmaco` is off-brand.** `tokens/deal-theme.css` sets Torino to
   navy (`--deal-primary:#14335f`, `--deal-accent:#4aa3d6`). The real Torino /
   Irmaco identity — recorded throughout the atlas and on every Torino slide —
   is **yellow/gold + navy**: yellow financial-table header cells, yellow
   numbered chips, hatched forecast bars. The render came out navy because the
   theme is navy, not because the components are wrong. → Fix in G4: give
   `.theme-irmaco` its gold accent (header/marker) + hatched-forecast styling,
   or add a themeable `--table-header` token Torino maps to gold.
2. **Footer chrome renders as an empty band in SSR.** SlideFrame's footer
   (Kumulus mark, section tabs, page number) did not paint its contents in the
   headless render — shows as a grey band. To verify: whether it needs the
   bundle/assets or a prop, vs a real gap. Non-blocking for the body skeleton.

**Verdict:** skeleton verified structurally; carry findings 1–2 into G4
(enforcement/theming). The FinancialStatement skeleton is usable now; it will
theme correctly for Torino once `.theme-irmaco` carries the gold accent.
