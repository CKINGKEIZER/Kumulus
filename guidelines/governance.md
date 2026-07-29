# Governance — Kumulus Partners design system

How this system is versioned, reviewed, named, and traced. Read alongside
`readme.md` (the design guide) and `SKILL.md` (the operating brief).

## Versioning
- **Semantic-ish, doc-driven.** The source of truth is the files; there is no
  build number to hand-edit (the compiler regenerates `_ds_bundle.js`,
  `_ds_manifest.json`, `_adherence.oxlintrc.json` — never edit those).
- Record notable changes at the bottom of this file (Changelog). Bump the
  **minor** line when components/tokens are added, **patch** for fixes, and
  call out a **breaking** change when a prop or token is renamed/removed
  (e.g. the `clientLogoSrc`→`titleLogoSrc` / Source Sans 3→Source Sans Pro
  changes were breaking).

## Naming
- **Components:** PascalCase, one exported function per `.jsx`, matching sibling
  `.d.ts` + `.prompt.md`. Group folders are concerns (brand / layout / content /
  charts / diagrams / data / feature).
- **Tokens:** `--<concept>-<step>` base values (`--cobalt-600`), semantic aliases
  (`--brand-primary`), deal skin as `--deal-*`. Never hard-code a hex in a
  component — reference a token.
- **Deal themes:** `.theme-<deal>` classes (`.theme-bemedico`).
- **Templates:** `templates/<slug>/<Slug>.dc.html`.
- **Slides/atlas ids:** `BON-nn` / `TOR-nn` / `LTP-nnn`; template ids `T-<NAME>`;
  layout patterns `LP-<NAME>`.

## Review checklist (before any slide/deck ships)
House rules — all must pass:
- [ ] **Margins** 0.53 cm sides / 0.63 cm top / ~1.1 cm footer (never widened).
- [ ] **One body font size** (`--fs-body`); only the title/subtitle is larger.
- [ ] **Colour minimal** — filled colour only on section bars, numbered/section
      panels, KPI tiles, chart series; panel headers grey; everything else
      white + 0.25 pt hairlines.
- [ ] **Title** sentence-case serif; **bullets** square or ▷.
- [ ] **Every figure sourced** or marked `[x]`/`[-]`; footnotes `(1) … (2) …`
      in 7 pt grey. No invented numbers.
- [ ] **Adjectives governed** (Class B/C carry their evidence); connectives
      rotated; no mechanical "strong"/"recurring"/"driven by" repetition.
- [ ] **Advisor vs target** correct — Kumulus mark bottom-right permanent;
      target via `TargetLogo` (yellow placeholder if none); third-party logos grey.
- [ ] **Deal theme applied** (a `.theme-*` class on the slide root); no other
      deal's colour or terminology leaking in.
- [ ] **No emoji / no exclamation marks**; British/EU spelling, `€`.

## Provenance & traceability
- Slide claims trace through `schemas/evidence.schema.json` (source fact →
  interpretation → slide language), with `supportedBy` document+page refs.
- Source material lives in `atlas/` (307 classified slides) and is the ground
  truth for "how do we normally do X" — match the canonical exemplar, don't guess.
- Dynamate / Project Spark are **examples only** (`examples/…`), never a
  production default (WP2).

## Known substitutions to confirm (flagged)
- **Merriweather** serif stands in for the IM title face — documented, unconfirmed
  against the real file.
- **Lucide** (CDN) substitutes for the house pictogram set — the main
  "AI-generated" tell; replace with the real Kumulus/deal icon library when
  available.
- **OTF fonts** (Source Sans Pro) are heavier than woff2; convert if load matters.
- Real transparent-PNG **deal logos** are not yet supplied; slides use placeholders.

## Changelog
- **v0.7** — Loose ends: 26 component `.prompt.md` files; foundation cards
  (Colors ×3, Type ×2, Spacing); `ColumnChart` grouped mode fixed; IM deck
  template (`templates/im-deck/`); this governance doc.
- **v0.6** — S7: routing brain (`template-registry.json`, `selection-rules.md`),
  writing engine, PanelHeader/KeyMessageBand, customers back-half template.
- **v0.5** — S6: Timeline/ProcessFlow/Pyramid/Donut/NumberedHighlight +
  investment-highlights template.
- **v0.4** — S5: ColumnChart, FinancialTable, ComparisonMatrix/HarveyBall,
  chart annotation atoms.
- **v0.3** — S4: real Source Sans Pro + Kumulus logo; deal-theme + canvas token
  layers; cover + frosted-ToC divider chrome.
- **v0.2** — S1–3: 307-slide atlas, taxonomy + clustering, 40-pattern layout
  library, writing corpus.
- **v0.1** — Foundations: tokens, fonts, base components, chrome, readme.

---

## Enforcement (Phase F / G4)

Run `node atlas/verify/guards.js` on every change to the design system.

- **Type guard** — no px font-size literals outside the 4-size scale
  (title 18.7 / body 12.7 / footnote 9.3 / hero-KPI 24,32 / page-title 34) plus
  the footer-chrome and cover/divider display allowlists. All 28 skeletons and
  the new primitives PASS. Pre-existing chrome debts are logged advisory:
  ProcessSteps 11px, PullQuote 9.5px, SlideFrame ToC 13/15px — swap to `--fs-*`.
- **Margin guard** — only `SlideFrame` sets `--slide-margin-*`. The one flagged
  case (`AppendixSegment`) is a deliberate full-bleed self-contained slide.
- **Density guard** — skeletons with a required multi-slot contract warn on
  empty slots (`FinancialStatement`, `InvestmentHighlights`). Advisory for the
  rest.

### Deferred: `.theme-irmaco` gold identity (colour deprioritised by owner)
The real Torino/Irmaco identity is gold+navy, but `tokens/deal-theme.css`
`.theme-irmaco` is navy/blue. The correct fix is **not** to set `--deal-primary`
to gold (the header components hard-code white text → unreadable on yellow), but
to add a themeable pair `--deal-header-fill` / `--deal-header-text` (default
`--deal-primary` / `#fff`; Irmaco → gold / navy) and point `FinancialTable`,
`KpiTable`, `KpiTileGrid` header fills at them. Deferred per owner direction
(colour treated as non-blocking for the template). BeMedico (purple) is correct.
