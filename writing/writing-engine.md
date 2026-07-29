# Writing engine — facts → Kumulus IM copy

The procedure that turns deal facts into on-brand slide language. Uses
`writing/sentence-patterns.json`, `adjective-lexicon.json`,
`repetition-rules.json`, `title-patterns.json`, and the traceability model in
`schemas/evidence.schema.json`.

## Inputs
- A set of **facts** (evidence.schema.json `fact` objects) for the slide's topic.
- The **template** chosen by routing (gives the slide's argument + structure).

## Steps
1. **Group facts into arguments.** Each argument becomes one main bullet or one
   highlight. One argument, one point — don't staple unrelated facts together.
2. **Pick the title mode** (`title-patterns.json`): topic/descriptive for most
   content; a takeaway sentence only for market/positioning/strategy where the
   page proves a claim. Sentence case, serif.
3. **For each argument, choose a sentence family** (`sentence-patterns.json`):
   e.g. attribute-plus-evidence for a strength you can substantiate,
   cause-and-effect for a market condition, metric-led when the number leads.
   Don't default everything to "X is driven by Y".
4. **Apply the three layers** (evidence.schema.json): source fact → permitted
   interpretation → slide language. The slide sentence must be supported by the
   fact; keep a claim trace (element → source page).
5. **Govern adjectives** (`adjective-lexicon.json`): Class A free with basic
   support; Class B only with its specific evidence (leading→share,
   loyal→retention, high-margin→margin data); Class C avoid.
6. **De-duplicate language** (`repetition-rules.json`): rotate connectives
   across adjacent bullets/slides (driven by / reflects / supported by /
   results from), vary sentence length, ≤1 Class-B superlative per bullet,
   don't lean on "strong" / "recurring" / "offering".
7. **Quantify + qualify:** units + period tags (€m, FY24A, LTM Jun-25, % CAGR);
   hedge honestly ("often", "primarily", "around"); footnote sources; unknowns
   `[x]` / `[-]`.
8. **Respect the bullet hierarchy:** takeaway → section heading → main bullet →
   supporting bullet. Mix compact label captions with two-part sentences; don't
   write every element as a paragraph.

## Worked example (customers/concentration, T-CUSTOMERS)
Facts: top-10 = 26.8% of FY24A revenue; stable over 3y; top-10 grew €3.2m→€4.4m
(16.1% CAGR); 60% of clients are hospitals.
- Title (descriptive): "Highly diversified customer base with limited customer dependency"
- Key message (takeaway): "The client portfolio is broad and anchored by a strong hospital presence."
- Main bullet (metric-led): "The top 10 customers account for c.27% of FY24A revenue, a level that has been stable over the historical period."
- Supporting (evidence-plus-implication): "Over the same period these accounts grew from €3.2m to €4.4m (16.1% CAGR), reflecting deepening relationships rather than concentration risk."
- Compact caption: "60% of clients are hospitals"

## Guardrails
- Never copy a source sentence verbatim into an unrelated deal; reuse structure,
  not wording.
- Never assert a Class-B/C claim without its evidence field populated.
- Never invent a number to fill a layout — cut content or mark `[x]`.
