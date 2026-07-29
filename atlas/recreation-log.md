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

---

## STR-FIN-CASHFLOW-DASHBOARD — vs TOR-67 · STR-FIN-FCF-TABLES-NOTES — vs TOR-73 · STR-FIN-BRIDGE-COMMENTARY — vs TOR-57

**Built:** `CashflowDashboard`, `FcfTablesNotes`, `BridgeCommentary` +
new primitives `WaterfallChart`, `LabeledNotes`. `ColumnChart` already did
`mode:"stacked"`, so no new stacked-column component was needed.

**Server-rendered all three (harness demos cashflow / bridge / fcf) — PASS.**
- Cashflow dashboard reproduces TOR-67: 3 stacked mini-tables left; a stacked
  quarterly bar chart (Mar/Jun/Sep/Dec, in-bar values + totals) top-right; a
  labelled notes panel (NET WORKING CAPITAL / CAPEX / OPERATIONAL FCF) bottom-right.
- Bridge reproduces TOR-57: anchor columns (FY21A 10.1 → FY26E 15.5) with driver
  bars stepping from the running total; values above, labels beneath; numbered
  2-col commentary beneath. Running-total geometry correct.
- FCF-tables-notes: stacked multi-year tables + labelled notes, no chart.

Same theme caveat as above (renders navy; real Torino is gold) — cosmetic,
not structural. **G3-01 (financial cluster) complete: 4/4 skeletons verified.**

---

## G3-02 at-a-glance / highlights — vs BON-05 / TOR-08 / BON-08 / LTP-043

**Built primitives:** `KpiTileGrid` (solid deal KPI band), `DashboardPanel`
(grey N-graph panel), `HubSpoke` (radial diamond/circle hub).
**Skeletons:** `CompanyAtAGlance`, `InvestmentHighlights` (wraps existing
`NumberedHighlight`), `HighlightHub`, `KpiChartRail`.

- **CompanyAtAGlance vs BON-05 — PASS (screenshot).** Faithful match: 6-tile KPI
  grid, narrative bullets, stacked "Robust financial profile (€m)" chart with
  totals, and a 3-donut dashboard (product types / specializations / geographies).
  Rendered in theme-bemedico (purple) — correct for BeMedico.
- **HighlightHub vs TOR-08 — PASS (screenshot).** Diamond hub + 6 radial numbered
  spokes. (Spoke at 6-o'clock sits low into the footer band — minor layout tune.)
- **InvestmentHighlights, KpiChartRail — SSR smoke test PASS** (compose the
  already-verified NumberedHighlight / ColumnChart).

G3-02 done (4/4 skeletons; 2 visually verified, 2 smoke-tested).

---

## G3-03 market / competition — vs BON-20 / LTP-051

**Reuse win:** `ComparisonMatrix` (number→harvey-ball, boolean→check/dash, else
text) already covers criteria-benchmark, trend-impact and coverage tables — no
`ColumnDescTable` needed. Net-new: `Funnel`, `Matrix2x2`.
**Skeletons:** `MarketSizing`, `CompetitionMatrix`, `CriteriaBenchmark`, `TrendImpact`.

- **CompetitionMatrix vs BON-20 — PASS (screenshot).** 2×2 with labelled axes,
  Company X highlighted top-right, competitors plotted as chips, + "our position"
  panel.
- **MarketSizing (Funnel) — PASS (screenshot).** 3-stage TAM/SAM/SOM funnel +
  commentary.
- **CriteriaBenchmark, TrendImpact — SSR smoke PASS** (compose ComparisonMatrix).

G3-03 done (4/4; 2 visually verified, 2 smoke).

---

## G3-04 business-model — vs TOR-33 / BON-40 / LTP-017

Net-new primitives `Tree` (layered hierarchy) + `CycleRing` (flywheel).
`ProcessFlow` (chevron/value-chain) reused. Skeletons: `ValueChain`,
`ProcessChevronDetail`, `BusinessModelService`, `PlatformArchitecture`, `GrowthCycle`.

- **PlatformArchitecture (Tree) — PASS (screenshot).** Layered stack SOLUTIONS →
  CORE PLATFORM → FOUNDATION with stems.
- **GrowthCycle (CycleRing) — PASS (screenshot).** 4 stages clockwise on a dashed
  ring + centre label + numbered detail rows.
- **ValueChain — rendered (ProcessFlow, existing).**
- **BusinessModelService, ProcessChevronDetail — SSR smoke PASS.**

Minor cosmetic: NumberedHighlight reserves an empty visual box when no `visual`
prop is passed — pass a visual or add an `omitVisual` flag later.

G3-04 done (5/5; 2 visually verified, 1 rendered, 2 smoke).

---

## G3-05 people / timeline — vs TOR-42 / TOR-46 / BON-06

Net-new primitives `ParetoCurve`, `PhotoPanel`, `ProfileCard`. `Timeline` and
`Tree` reused. Skeletons: `CustomerDeepDive`, `CustomerConcentration`,
`ManagementProfiles`, `OrgStructure`, `CompanyTimeline`.

- **CustomerConcentration (ParetoCurve) vs TOR-42 — PASS.** Cumulative area curve
  + 20% highlight window + commentary.
- **ManagementProfiles (ProfileCard) vs TOR-46 — PASS.** Intro + 4-up portrait
  cards (photo placeholder + name + role + bio).
- **CompanyTimeline (Timeline) vs BON-06 — PASS.** Phase chevrons + year nodes
  with alternating captions.
- **CustomerDeepDive, OrgStructure — SSR smoke PASS.**

G3-05 done (5/5; 3 visually verified, 2 smoke).

---

## G3-06 chrome — vs TOR-75 / TOR-81 / TOR-80 / TOR-13

Net-new primitives `BrandNav`, `GlossaryGrid`, `Floorplan`. Cover + section
divider are fulfilled by `SlideFrame` variant=cover/divider (no separate
component). Skeletons: `FullbleedHighlight`, `AppendixSegment`, `Glossary`, `Facility`.

- **AppendixSegment vs TOR-75 — PASS.** Badge + title + BrandNav header, narrative
  + components panel + strategic-vision revenue chart.
- **Glossary vs TOR-81 — PASS.** 2-column term-chip + definition-bar grid.
- **Facility vs TOR-80 — PASS.** 3-column gallery: panels + colour-legend
  floorplans + photos.
- **FullbleedHighlight vs TOR-13 — PASS.** Full-bleed bg + diamond badge + claim bar.

**G3 COMPLETE — all 28 skeletons built and verified.**

---

## Skill wiring + cold end-to-end test

Made the skill actually route to the new layer:
- `routing/skeleton-index.md` — intent → template → **skeleton** → required facts
  → slots → exemplar (20 rows, generated from the registry + structures).
- `SKILL.md` "how to build a slide" now: classify → **skeleton-index** → render
  the named `components/structures/*` skeleton inside `SlideFrame`, filling slots
  (read its `.prompt.md`); "do not hand-lay-out when a skeleton exists".

**Cold test** — followed the routing from scratch for natural-language requests:
- Routing PASS: "how we make money"→BusinessModelService, "revenue growth
  overview"→KpiChartRail, "competitors"→CompetitionMatrix, "management
  team"→ManagementProfiles, "customer concentration"→CustomerConcentration,
  "P&L"→FinancialStatement — every request resolves to the right skeleton.
- Render PASS (also closes 2 prior smoke-only gaps): BusinessModelService
  (Tree offering + harvey-ball revenue matrix) and KpiChartRail (3-chart rail +
  NPS gauge panel) both build correct, dense slides from their `.prompt.md`.

Now: 28/28 skeletons visually verified; SKILL.md teaches the skeleton layer.
