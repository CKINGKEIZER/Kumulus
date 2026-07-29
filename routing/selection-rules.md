# Slide routing — "I need a slide about X" → how Kumulus makes it

The decision procedure the designer follows. Reads with
`routing/template-registry.json` (the template specs),
`routing/taxonomy.json` (families), and `routing/layout-patterns.json`
(the 40 structural archetypes).

## Procedure
1. **Classify intent by MEANING, not keywords.** Map the request to a
   `family` in `taxonomy.json`. "How do they make money" → business-model,
   not a keyword match on "money". "Who are the customers / how concentrated"
   → customers/concentration.
2. **Pick the template** from `template-registry.json` whose family/subfamily
   matches. Check `useWhen` / `avoidWhen` to disambiguate neighbours
   (market-size vs competition; timeline vs roadmap; overview vs statement).
3. **Choose the layout pattern** from the template's `layout` list based on the
   data shape you actually have (series → column chart; share → donut;
   hierarchy → tree; flow → chevron; comparison → matrix).
4. **Check required inputs.** If present, build. If missing, use the template's
   `fallback`, and mark gaps `[x]` — never invent figures.
5. **Write the copy** with the writing engine (`writing/writing-engine.md`):
   pick sentence families, obey adjective classes + repetition rules, keep the
   three-layer fact→interpretation→language separation.
6. **Apply house rules** (every slide): fixed 0.53cm margins, single body font
   size (`--fs-body`; only the title is larger), minimal colour (bars / panels
   / KPI tiles / chart series only — panels are grey/white with hairlines),
   square/▷ bullets, footnoted sources, deal theme via a `theme-*` class.

## Disambiguation quick table
| Request cue | Family → Template |
|---|---|
| "overview / snapshot / at a glance" | company-at-a-glance → T-AT-A-GLANCE |
| "history / milestones / journey" | company-history → T-TIMELINE |
| "why invest / strengths / equity story" | investment-highlights → T-INVEST-HIGHLIGHTS |
| "market size / TAM / growth of the market" | market-sizing → T-MARKET-SIZE |
| "trends / drivers / regulation / demand" | market-drivers → T-MARKET-DRIVERS |
| "competitors / positioning / landscape / barriers" | competitive-positioning → T-COMPETITION |
| "products / services / offering / portfolio" | product-offering → T-OFFERING |
| "business model / how they make money / recurring" | business-model → T-BUSINESS-MODEL |
| "operations / value chain / logistics / process" | operations → T-VALUE-CHAIN |
| "customers / concentration / diversification" | customers → T-CUSTOMERS |
| "team / management / org chart" | organization → T-ORG |
| "strategy / growth plan / pillars" | strategy → T-STRATEGY |
| "roadmap / phasing / implementation" | strategy/roadmap → T-ROADMAP |
| "M&A / buy-and-build / acquisitions / targets" | m-and-a → T-MA |
| "revenue / EBITDA / margins / financial highlights" | financial-overview → T-FINANCIAL-OVERVIEW |
| "P&L / balance sheet / cash flow / QoE / statements" | financial-statements → T-FINANCIAL-STATEMENT |
| "case study / reference / client story" | operations → T-CASE-STUDY |
| "appendix / detailed / backup" | appendix → T-APPENDIX-TABLE |
| "cover / front page" · "section / part" | chrome → T-COVER · T-DIVIDER |

## Multi-slide requests
"Build the exec-summary section" → sequence T-AT-A-GLANCE → T-TIMELINE →
T-OFFERING → T-INVEST-HIGHLIGHTS (1/2, 2/2) → transaction overview, opened by
T-DIVIDER. Match each deck's spine (see `atlas/README.md` section spines).

## When nothing fits
Fall back to the standard content workhorse: SlideFrame + PanelHeader/SectionBar
columns + BulletList + one evidence element, at house density (~5 bullets/column,
evidence in the bottom third). Never leave whitespace; never drop below the
single body font size.
