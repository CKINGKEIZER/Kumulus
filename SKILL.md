---
name: kumulus-design
description: Use this skill to generate well-branded Kumulus Partners interfaces and assets — above all sell-side Information Memoranda (IMs) and pitch decks — for production or throwaway prototypes/mocks. Contains the full design system: colors, type, fonts, assets, reusable components, a 307-slide source atlas, a 40-pattern layout library, a sell-side writing engine, and an intent→template routing brain. Invoke whenever the user asks for a Kumulus slide, deck, IM, or any branded artifact.
user-invocable: true
---

# Kumulus Partners — IM design system

You are producing **Information Memoranda**: dense, document-style 16:9 slides
built to be *read* by buy-side investors, not presented from a stage. Kumulus is
the permanent **advisor** brand; the **target company** is a per-deal skin.
Information density is the point — add structure and detail, never whitespace.

## Read these first (they ARE the brand)
1. **`readme.md`** — brand context, content fundamentals, visual foundations, iconography, component index.
2. **`guidelines/slide-recipes.md`** — the 13 slide archetypes + the non-negotiable house rules.
3. **`routing/selection-rules.md`** — "I need a slide about X" → which template, decided by MEANING not keywords.
4. **`writing/writing-engine.md`** + `sell-side-writing-guide.md` — how Kumulus writes.

## Non-negotiable house rules (from the intern manual + measured from real IMs)
- **Margins are fixed:** 0.53 cm (~20 px) left/right, 0.63 cm above the title, ~1.1 cm footer. Encoded as `--slide-margin-x/-top`, `--slide-footer-h`. Never widen.
- **One body font size.** ALL body copy — bullets, labels, table cells, chart labels — is `--fs-body` (9.5 pt). The ONLY larger text is the slide title (+ subtitle). To fit, cut content or add a page; never shrink text.
- **Colour is minimal.** Filled colour is reserved for section bars, numbered/section panels, KPI tiles and chart series. Panel headers are GREY small-caps bands (`PanelHeader`), not filled. Everything else is white with 0.25 pt grey hairlines. No colour-filled cards or backgrounds.
- **House shadow** (floating imagery only): `--shadow-house` = 60% transparency, 5 pt blur, 0 offset.
- **Title rule** black 0.5 pt; all other separators grey 0.25 pt. Bullets are navy/cobalt **squares** or the **▷** triangle. Sentence case, serif titles — never Title Case.
- **Never invent numbers.** Mark unknowns `[x]` / `[-]`. Footnote sources `(1) … (2) …` in 7 pt grey.
- **No emoji, no exclamation marks.** British/EU spelling, `€`.

## How to build a slide (the procedure)
1. **Classify intent by meaning** → a `family` in `routing/taxonomy.json`.
2. **Pick the template** in `routing/template-registry.json` (check useWhen/avoidWhen; it names required inputs, layout patterns, canonical source slide, fallback).
3. **Choose a layout pattern** from `routing/layout-patterns.json` by the data shape you actually have (series→ColumnChart, share→Donut, hierarchy→tree, flow→ProcessFlow, comparison→ComparisonMatrix). Browse `atlas/layout-patterns.html` — 40 real archetypes — for how Kumulus packs the boxes.
4. **Write copy** with the writing engine: pick a sentence family (`writing/sentence-patterns.json`), obey adjective classes (`adjective-lexicon.json`), rotate connectives (`repetition-rules.json`), keep fact→interpretation→language separation (`schemas/evidence.schema.json`).
5. **Apply the house rules above**, then theme the deal.

## Deal theming (industry-neutral)
The visual system is constant; colour + terminology change per deal. Put a theme
class on the slide root — `.theme-bemedico` (purple), `.theme-cobalt`, `.theme-irmaco`
— or redefine the six `--deal-*` vars. Never bake one deal's colour into a component.
Terminology follows the target's industry (medical→OEM/consumables/installed base;
industrial→capacity/backlog; software→ARR/churn). Target logo → `TargetLogo` (falls
back to the mandatory yellow placeholder); third-party logos → `ThirdPartyLogoPlaceholder` (grey).

## Building artifacts
- **HTML slide** = fixed 1280×720 root, `<link rel="stylesheet" href="…/styles.css">`, React+Babel pinned tags, `<script src="…/_ds_bundle.js">`, then `const { … } = window.KumulusPartnersDesignSystem_533273`. Scale-to-fit script for preview. See any file in `ui_kits/im-slides/` as a working example.
- **Components** live under `components/**`; every one has a `.d.ts` (props) and most a `@dsCard` demo. Compose slides from them — do not re-implement primitives.
- If working in production code, copy assets out and read the rules here to design as a Kumulus expert.

## The source atlas (ground truth)
`atlas/` indexes 307 real slides across three decks (Bones/BeMedico — medical
distribution; Torino/Irmaco — industrial safety; the 158-slide long template —
the structural idea box). Every slide is classified by family/subfamily with a
page-render thumbnail. Open `atlas/index.html` to find "how do we normally do an
X slide" and match the canonical exemplar. **When unsure how a slide should look,
find the real one in the atlas — do not guess.**

## If invoked with no brief
Ask what they want to build, ask a few sharp questions (deal name, target
industry, which section/slides, real data + assets available), then act as an
expert Kumulus designer outputting HTML artifacts (or production code). The
biggest quality lever is real assets — always ask for the house icon set and
real transparent-PNG logos; substituting generic icons is the main "AI-generated"
tell.
