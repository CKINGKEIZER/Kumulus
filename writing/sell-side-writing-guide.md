# Kumulus sell-side writing guide

How to write Information Memorandum copy that reads like real Kumulus work.
Derived from the Bones (BeMedico — medical distribution) and Torino (Irmaco —
industrial safety) IMs: 149 classified slides, 116 content titles, and 753
extracted sell-side bullets. Companion data files in this folder:
`sentence-patterns.json`, `title-patterns.json`, `adjective-lexicon.json`,
`repetition-rules.json`, and `../schemas/evidence.schema.json`.

## The objective
**Evidence-based persuasive sell-side writing** — not neutral corporate prose,
not marketing hype. Every positive claim is backed by a fact; conviction is
allowed, but it is earned.

## Voice
- Third person, by company name ("BeMedico is…", "Irmaco operates…"). Never
  "we" or "you". No rhetorical questions, no reader address.
- Formal, analytical, British/EU spelling, `€`. No emoji, no exclamation marks.
- Confident but qualified: "often exclusive", "primarily from consumables",
  "around 9 years".

## Titles (see `title-patterns.json`)
Sentence case, Merriweather serif — **never Title Case**. Most titles are
**topic** (~45%: "Logistics and warehousing") or **descriptive** (~37%:
"Diversified product portfolio") labels. **Takeaway** full-sentence titles
(~18%) are reserved for market / positioning / strategy slides that argue a
claim the body proves ("Healthcare demand in the Benelux is structurally
growing"). Financial pages use formal statement labels with prefixes
("Historical – Reported profit & loss statement").

## Bullet hierarchy (Plan §12)
1. **Takeaway** — complete assertive sentence (key-message band).
2. **Section heading** — short, argumentative, small-caps.
3. **Main bullet** — one sentence, one argument.
4. **Supporting bullet** — evidence, explanation or qualification.
Do not write every element as a paragraph. Mix compact label-style captions
with two-part sentences.

## Sentence families (see `sentence-patterns.json`)
Thirteen moulds, each with real examples: direct-declarative,
attribute-plus-evidence, evidence-plus-implication, cause-and-effect,
capability-plus-outcome, positioning, comparative, historic-development,
future-opportunity, market-trend-plus-relevance, metric-led,
two-part-sell-side, compact-label. Pick the family that fits the argument;
don't default everything to "X is driven by Y".

## Adjective governance (see `adjective-lexicon.json`)
- **Class A** (safe with basic support): recurring, specialized, diversified,
  long-standing, experienced, loyal, broad, extensive, independent…
- **Class B** (needs specific evidence): strong, leading, attractive, resilient,
  best-in-class, high-margin… Pair each with its proof (leading→market share;
  loyal→retention/churn; high-margin→margin data).
- **Class C** (rare, needs external substantiation): superior, exceptional,
  unique, world-class. The house barely uses these — keep it that way.

## Three-layer separation (see `evidence.schema.json`)
Keep facts, interpretation and slide language distinct so we neither copy
source text nor over-claim:
1. **Source fact:** "The company has 42 employees; average tenure is nine years."
2. **Permitted interpretation:** "The workforce is experienced and stable."
3. **Slide language:** "An experienced and loyal workforce, with an average
   tenure of nine years, supports continuity and specialist knowledge retention."
Every factual claim / superlative should trace to a source page.

## Repetition control (see `repetition-rules.json`)
The house leans hard on **"strong"** (31×) and **"recurring"** (28×), and on
connectives **"offering"** (19×) and **"driven by"** (17×). They're fine words —
just don't repeat them mechanically. Rotate connectives across adjacent slides;
vary sentence length; no more than one Class-B superlative per bullet.

> Avoid: "Revenue growth is driven by increased sales. Margin expansion is
> driven by improved product mix."
> Prefer: "Revenue growth reflects continued penetration of existing accounts…
> A favourable shift toward proprietary products supports further margin
> expansion."

## Terminology (infer per deal — never hard-code)
Vocabulary follows the target's industry: medical distribution → OEM,
consumables, installed base, reimbursement, certified maintenance; industrial
→ capacity, backlog, proprietary technology, maintenance cycle; software → ARR,
churn, net revenue retention. The visual system stays constant while
terminology changes with the company (Plan §18).

## Numbers & qualification
Quantify everywhere with unit + period tags (`€18.1m`, `FY24A`, `LTM Jun-25`,
`9.7% CAGR`, `78% in FY24A`). Footnote sources with numbered `(1) … (2) …` in
7pt grey. Mark unknowns `[x]` / `[-]` — never invent figures.
