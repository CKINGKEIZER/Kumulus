# Kumulus Partners — Design System

A design system for **Kumulus Partners**, an M&A advisory firm, covering the house style of their **Information Memorandum (IM)** documents: dense, document-style 16:9 slides built to be *read* by buy-side investors, not presented from a stage.

This system was originally reverse-engineered from a real deliverable — the *"Project Spark"* IM (deal codename; target company **Dynamate**). Per the rebuild plan (`uploads/Plan.md`, WP2), **Dynamate / Project Spark are retained only as an example** under `examples/project-spark-dynamate/` and must not supply defaults to production components. The chrome, palette, typography, and layout archetypes here are industry-neutral so any deal can be produced on-brand: Kumulus is the permanent **advisor** brand; the target company is a swappable per-deal asset that defaults to a mandatory yellow placeholder.

> **Information density is the point.** These slides carry 4-column USP grids, multi-series charts, KPI strips, and full case studies on a single page. When in doubt, add structure and detail rather than whitespace. This is a banker's document, not a keynote.

---

## Sources

- **`sources/Project Spark - IM.pdf`** — the source IM (9 pages, Section A: "Customers & go-to-market"). Original `.pptx` (\~30 MB+) could not be imported; the client supplied a PDF export which is the ground truth used here.
- **`uploads/Kumulus_Starters manual.pptx`** — the intern "formatting bible". Source of the exact house formatting rules below (shadow spec, bullet metrics, rule weights, font sizes per slide format, icon sourcing).
- **`sources/render/`** — full-page raster renders of each page (layout reference).
- **`sources/imgs/`** — every embedded image extracted from the PDF (logos, photos, screenshots). Note many are *third-party client logos* used as deal content (KAA Gent, OKay, PostNL, etc.) — these are **not** Kumulus brand assets and are kept only for reference.

Two firms appear on every page: **Kumulus Partners** (the advisor — wordmark bottom-left of the footer) and the **target company** (Dynamate — logo bottom-right). The system treats Kumulus as the permanent brand and the target as a swappable per-deal asset.

---

## Content fundamentals

How the IM is written — match this voice for any new copy.

- **Register:** formal, analytical, third-person. The company is referred to by name ("Dynamate serves as the customer's single IT partner"), never "we" or "you". No reader address, no rhetorical questions.
- **Headlines are full-sentence takeaways**, not labels. Every slide title is a complete claim the page then proves, e.g. *"Engaged and diversified customer base of mid-sized to large SMEs, with consistently high satisfaction"* and *"Long-standing customer relationships with significant opportunities for up- and cross-selling"*. Title case is **not** used — it's sentence case, serif.
- **Section/column headings are SMALL-CAPS labels**, letter-spaced, in navy: `INTEGRATED OFFERING`, `PROVEN EXPERIENCE`, `LIMITED CUSTOMER CONCENTRATION`. This is the single most recognisable typographic device in the document.
- **Body is terse bullet copy.** Square navy bullets, \~1-2 lines each, leading with the substantive point. Sentences often omit the article/subject for brevity ("Active across broad spectrum of industries, resulting in strong customer diversification").
- **Evidence is quantified everywhere.** Figures carry units and period tags: `€43M`, `FY24A`, `LTM Jun'25`, `6.2% CAGR`, `NPS: 31`, `78% customers score ≥ 8`. Footnotes (numbered `(1)`, `(2)`) qualify data sources at slide bottom.
- **Testimonials** are set as serif italic pull-quotes with attribution ("— Alexander Vanlerberghe, CEO Aqualex").
- **Tone words:** "mission-critical", "integrated", "unburdening", "lock-in", "stickiness", "cross-sell", "recurring". British/EU spelling and `€`.
- **No emoji. No exclamation marks.** Punctuation is restrained and precise.

---

## Visual foundations

- **Colour:** a deep corporate **navy `#152c5d`** does almost all the work — titles, bullets, header bars, vertical tabs, primary chart series. A bright **sky-blue "spark" `#78caf0`** is the single accent (arrows, connectors, highlights), echoing the Dynamate tagline *"the spark that powers IT"*. A **pale blue `#becef0`** fills value capsules and soft chart series; a medium blue `#06428f` is the secondary chart colour. Neutrals are cool grays (`#f2f2f2` bands, `#d9d9d9` rules). Case-study layouts swap the gray band for a **warm sand `#ede9e3`**. The Kumulus wordmark carries one raspberry accent dot (`#e0185a`) — used nowhere else.
- **Type:** **Merriweather** (serif) for slide titles and pull-quotes; **Source Sans 3** (sans) for everything else. The small-caps + letter-spacing treatment on labels is foundational.
- **Backgrounds:** white pages. No gradients on content (the only gradient is the navy scrim over the section-divider photo). Section dividers are full-bleed cool-toned corporate-documentary photography (offices, people, workplaces) with a left-anchored navy scrim and a large sky-blue section number.
- > ```
  > Layout: fixed 1280×720 canvas, ~40px side margins, a serif title with a hairline rule beneath, an optional gray "key-message" band, a flexible multi-column body, and a persistent footer. Vertical navy tabs label thematic blocks down the left edge. Navy header bars (flat rounded, or right-pointing chevron on case studies) head each block.
  > ```
- **Footer chrome (every content page):** hairline rule on top; bottom-left the Kumulus wordmark + `Project Spark | October 2025` / `Strictly private & confidential`; centre an optional footnote/source line; bottom-right a section page-tab navigator (`1 … 7 A`, current section expanded into a navy banner) + target logo + page number.
- **Shape & depth:** essentially flat — this is print-first. Small radii (3–5px) on capsules, bars, and cards. Hairline borders, not shadows; the rare shadow is faint (`0 1px 3px rgba(12,26,58,.10)`). Bullets are hard **squares**, not discs.
- **Data viz:** horizontal bar charts (navy bars + pale-blue value capsules), grouped columns, stacked areas, donuts, a segmentation pyramid, and an NPS gauge — all in the navy→sky ramp (`--chart-1..5`).
- **Motion / states:** the document is static and print-bound. Interactive recreations should keep motion minimal (short fades, standard easing); avoid bounces, parallax, or decorative loops.

---

## House formatting rules (from the intern manual)

Exact PPT-side specs, encoded as tokens where translatable:

- **Fonts:** Source Sans Pro 9.5pt body (long/IM format) or 9pt (regular format). Slide titles Merriweather — 14pt long format; 18pt major / 16pt subtitle in regular format. Notes 7pt grey. Never mix sizes within a deck.
- **Titles:** bold + small caps, set in a shape 0.7cm high (≈ the 34px `SectionBar`). Title underlines are **black 0.5pt** lines (`--rule-title`); every other separator is **0.25pt grey** (`--rule-separator`).
- **Shadow (the house shadow):** transparency 60%, size 100%, blur 5pt, angle 0°, distance 0pt — a centered soft glow, no offset. Encoded as `--shadow-house: 0 0 9px rgba(0,0,0,.40)`. Used on floating imagery/cards, not on flat layout panels.
- **Text in shapes:** L/R margin 0.25cm, T/B 0.13cm (`--box-pad-x/y`); top 0.80cm when a header sits in the shape (`--box-pad-top-header`).
- **Bullets:** 3pt space before/after (`--bullet-gap`); indent 0.48cm at level 1, 1cm at level 2 (`--bullet-indent-1/2`). House marker styles: navy/cobalt **square** (IM body) and the customized **▷** triangle — both supported by `BulletList marker="square"|"triangle"`.
- **Colors** come from the theme palette, never the eyedropper; presentations re-skin to the target company's color scheme (tokens make this a swap of `--brand-primary` etc.).
- **Logos** always with transparent backgrounds, even on white. Repeated elements (flags, logos in profile grids) keep identical positions across slides.
- **Charts:** Source Sans Pro, black labels; axes hidden not deleted; smoothed lines on line charts; self-made legends; years in columns.
- **WIP convention:** unknowns marked `[-]` / `[x]` or highlighted — never invented.
- **Icons:** PPT icon library first, else Noun Project / Visualpharm SVGs (this system substitutes Lucide via CDN — flagged).

## Slide archetypes

**`guidelines/slide-recipes.md` encodes the 13 house slide archetypes** — cover, section divider, exec summary, standard content, three-pillar/ESG, USP grid, charts/financials, customer/market, case study, buyer profiles / competitive landscape, team, process/next steps, appendix — each with its trigger phrases ("a slide about X"), layout recipe, density targets, and the components to compose it from. **Read it before building any slide.**

---

## Iconography

The source IM uses small, single-weight **navy line/solid pictograms** inside KPI cells and section bars (handshake, server stack, water-tap, gear, people, magnifier, etc.) plus **Wingdings** glyphs for its square bullets and arrows.

- **Bullets & arrows** are reproduced natively (CSS squares; an SVG arrow inside the `ArrowConnector` sky circle) — no icon font needed.
- **Pictograms:** the original set was not recoverable from the PDF. The system **substitutes [Lucide](https://lucide.dev)** (thin, consistent stroke, free) as the recommended icon set — link from CDN and color with `currentColor` / navy. *Flagged substitution — replace with the Kumulus house icon set if one exists.* Components that take an icon (`SectionBar`, `KpiCell`, `ColumnHeading`) accept any `ReactNode`, so swapping sets is a drop-in change.
- **No emoji** in any Kumulus output.

---

## Index / manifest

**Root**

- `styles.css` — global entry point (imports only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `guidelines/` — `slide-recipes.md` (the 13 slide archetypes — start here when asked for a slide).
- `assets/` — `fonts/` (woff2), `logos/` (Kumulus advisor mark), `imagery/` (cover photo), `sdg/` (framework tiles).
- `schemas/` — `deal-profile.schema.json` (industry-neutral DealProfile, Plan §9).
- `examples/project-spark-dynamate/` — legacy Dynamate assets (example only; never a production default).
- `readme.md` (this file), `SKILL.md` (Agent-Skills wrapper).
- `sources/` — extracted source material (reference only; not shipped design).

**Components** (`window.KumulusPartnersDesignSystem_533273.*`)

- `components/brand/` — **KumulusMark**, **TargetCompanyLogoPlaceholder**, **TargetLogo**, **ThirdPartyLogoPlaceholder** (advisor mark + mandatory yellow target placeholder + neutral third-party placeholder, Plan §8)
- `components/layout/` — **SlideFrame** (full 1280×720 chrome + `divider` variant), **SectionBar**, **VerticalTab**, **FooterNav**
- `components/content/` — **ColumnHeading**, **BulletList**, **KpiCell**, **ValueCapsule**, **KpiTable**, **BarRow**, **PanelHeader** (grey small-caps panel header), **KeyMessageBand** (serif takeaway strip)
- `components/charts/` — **ColumnChart**, **Donut**, **CagrPill**, **MarginCapsule**, **RefChip**
- `components/diagrams/` — **Timeline**, **ProcessFlow**, **Pyramid**
- `components/data/` — **FinancialTable**, **ComparisonMatrix**, **HarveyBall**
- `components/feature/` — **PullQuote**, **ProcessSteps**, **ArrowConnector**,
  **NumberedHighlight** (investment-highlights row: deal panel + bullets + visual)
- `components/charts/` — **ColumnChart** (stacked/grouped bars), **Donut**
  (share/segmentation), **CagrPill**, **MarginCapsule**, **RefChip**
- `components/diagrams/` — **Timeline** (phase-chevron history), **ProcessFlow**
  (chevron steps), **Pyramid** (segmentation)
- `components/data/` — **FinancialTable** (P&L/KPI statement), **ComparisonMatrix**
  + **HarveyBall** (capability / competitive / harvey-ball matrix)

Each directory carries a `@dsCard` demo (the Design System tab) and each component a sibling `.d.ts`.

**Foundations & slides** — foundation specimen cards (Colors / Type / Spacing), sample IM slides (group "Slides"), and a reusable IM deck template (`templates/im-deck/`) are in progress; see the project todo list.
