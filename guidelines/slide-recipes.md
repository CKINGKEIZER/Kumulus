# Kumulus Partners — Slide recipes ("when a user asks for X, build it like this")

This file encodes the house slide archetypes for Kumulus IMs and pitches.
**Match the request to an archetype below, then compose it from the listed
components.** Do not invent new layouts when an archetype fits.

Two slide formats exist (intern manual):
- **Long format** — IMs (Project Spark/Up/Barkley style). Body 9.5pt, slide
  titles Merriweather 14pt. Dense, document-style, read not presented. This
  design system's 1280×720 scale is calibrated for this format.
- **Regular format** — pitches/proposals. Body 9pt; major titles Merriweather
  18pt, subtitles 16pt. Same visual language, slightly larger titles.

Universal rules (every content slide):
- **Margins are fixed and specific:** 0.53cm (~20px) left/right page margin,
  0.63cm above the title, ~1.1cm footer zone — measured from real IMs, encoded
  as `--slide-margin-x/-top` + `--slide-footer-h`. Never widen them.
- **One body font size.** All body copy — bullets, labels, table cells, chart
  labels — is the SAME size (`--fs-body`, 9.5pt). The ONLY larger text is the
  slide title (and its subtitle). Do not shrink body text to fit; cut content
  or add a page instead.
- **Colour is minimal.** Filled colour is reserved for section bars, the
  numbered/section panels, KPI tiles and chart series. Everything else is white
  with 0.25pt grey hairlines. Do not fill cards or backgrounds with colour.
- `SlideFrame` chrome: serif charcoal title (a full-sentence takeaway, sentence
  case), black 0.5pt rule under the title zone, footer (Kumulus wordmark,
  "Project X | Month Year", "Strictly private & confidential", footnote line,
  section page-tabs, target logo, page number).
- Footnotes numbered `(1) … ; (2) …` in 7pt grey at slide bottom.
- Body text lives in shapes with L/R padding 0.25cm / T/B 0.13cm
  (`--box-pad-x/y`); bullets 3pt before/after (`--bullet-gap`), indent 0.48cm
  then 1cm (`--bullet-indent-1/2`).
- Shadows only on floating imagery/cards: the house shadow is
  `--shadow-house` (60% transparency, 5pt blur, 0 distance — centered glow).
- Icons: never hand-drawn. Use a consistent line icon set (Lucide as CDN
  stand-in for the PPT icon library / Noun Project). Logos always with
  transparent backgrounds.
- Mark unknowns as `[x]` or `[-]` — never fabricate figures.

---

## 1. Cover / title slide
**Ask sounds like:** "cover", "title page", "front page".
Full-bleed corporate-documentary photo, navy scrim from the left, big serif
title (deal codename, e.g. "Project Boreas"), subtitle "Information
Memorandum — Month Year", "Strictly private & confidential", Kumulus wordmark.
Components: `SlideFrame variant="divider"`, `KumulusMark`.

## 2. Section divider
**Ask sounds like:** "section page", "chapter break", "part B".
Same photographic treatment as cover + an oversized sky-blue section letter/
number (A, B, 1…) and the section title in white serif. Footer tabs show the
new section expanded.
Components: `SlideFrame variant="divider"`.

## 3. Executive summary / key messages
**Ask sounds like:** "exec summary", "investment highlights", "key takeaways".
Grey key-message band under the title, then 5–7 numbered or labelled rows:
small-caps cobalt lead-in (`INTEGRATED OFFERING`) + 1–2 line proof sentence
with quantified evidence. Optionally a right rail of 3–4 `KpiCell`s.
Components: `ColumnHeading`, `BulletList`, `KpiCell`.

## 4. Standard content slide (workhorse)
**Ask sounds like:** anything explanatory — "a slide about our offering".
2–3 columns, each headed by a cobalt `SectionBar` (white end-knobs) or a
small-caps `ColumnHeading` with black title-rule; square-bullet copy below;
bottom third reserved for evidence (chart, photo, KPI strip, testimonial).
Density target: every column filled; ~5 bullets/column; no orphan whitespace.
Components: `SectionBar`, `ColumnHeading`, `BulletList`, `KpiCell`, `PullQuote`.

## 5. Three-pillar / framework slide (e.g. ESG)
**Ask sounds like:** "ESG slide", "our three pillars", "strategy framework".
Three equal columns: `SectionBar` per pillar (framework chips — e.g. UN SDG
tiles — in the bar's `trailing` slot), 5 bullets each, evidence row at bottom
(donuts + serif-italic captions / photo + testimonial / product imagery).
Reference build: `ui_kits/im-slides/index.html`.

## 6. USP / highlights grid
**Ask sounds like:** "why us", "USPs", "strengths", "highlights".
4-column (or 2×2) grid of cards: line icon top, small-caps cobalt heading,
2–3 line body. Flat cards — hairline border, 3–5px radius, no shadow.
Components: `ColumnHeading`, `KpiCell`, `BulletList`.

## 7. Chart / financials slide
**Ask sounds like:** "revenue development", "financial overview", "KPIs".
Title takeaway states the trend ("Revenue grew at 6.2% CAGR…"). 2–3 chart
panels, each headed small-caps; charts in the navy→cobalt→sky→green ramp
(`--chart-1..5`); navy bars with pale-blue value capsules; period tags
(FY24A, LTM Jun'25); always a self-made legend; footnote sources that data.
Components: `BarRow`, `ValueCapsule`, `KpiTable`, `ColumnHeading`.

## 8. Customer / market analysis
**Ask sounds like:** "customer base", "market", "segmentation".
Mixed-viz page: donut (concentration), pyramid (segmentation), horizontal
bars (top-10 customers), NPS gauge; one testimonial `PullQuote` as
qualitative proof. Grey band for the key message.

## 9. Case study
**Ask sounds like:** "case study", "project reference", "client story".
Warm sand band (`--surface-band-warm`); chevron-ended `SectionBar
variant="chevron"` headers (CONTEXT → APPROACH → RESULT); client logo +
photo; KPI capsules for outcomes; serif-italic client quote.

## 10. Buyer profiles / competitive landscape
**Ask sounds like:** "buyer list", "competitors", "landscape".
Uniform row/grid: logo cell (transparent bg, fixed position — identical
placement across slides), country flag, small-caps name, description
bullets, KPI columns (revenue, EBITDA, HQ). Repeat exactly per row; the grid
IS the design. Components: `KpiTable`, `ColumnHeading`.

## 11. Team / people slide
**Ask sounds like:** "management team", "organisation", "who we are".
Grid of arched-frame portraits (rounded-top rectangle), sans name +
italic grey role beneath; optionally a serif-italic quote per person
(`PullQuote variant="testimonial"`); org lines 0.25pt grey.

## 12. Process / next steps
**Ask sounds like:** "transaction process", "timeline", "next steps".
Horizontal `ProcessSteps` with `ArrowConnector` sky circles; phases as
cobalt bars; dated milestones beneath; footnote for indicative timing.

## 13. Appendix / detail tables
**Ask sounds like:** "appendix", "detailed financials", "backup".
Dense `KpiTable` pages; smaller type OK (min `--fs-body-sm`); same chrome;
section tab shows "A".
