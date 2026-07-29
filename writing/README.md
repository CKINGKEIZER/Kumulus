# Writing — Kumulus sell-side language (Session 3)

How Kumulus writes IM copy. Mined from the two real IMs (Bones/BeMedico,
Torino/Irmaco): 116 content titles + 753 extracted sell-side bullets. The long
template was deliberately excluded — its text is placeholder, so it informs
layout, not language.

- **`sell-side-writing-guide.md`** — the human-readable guide (voice, titles,
  bullet hierarchy, sentence families, adjective governance, three-layer
  fact→interpretation→slide-language separation, repetition control,
  terminology, numbers). **Start here.**
- **`sentence-patterns.json`** — 13 sell-side sentence families, each with shape
  + 2 real examples.
- **`title-patterns.json`** — title grammar: topic (~45%) / descriptive (~37%)
  / takeaway (~18%) / financial, with conventions. Corrects the earlier
  "every title is a takeaway" error.
- **`adjective-lexicon.json`** — Class A/B/C governance with real usage counts
  and the claim→evidence table.
- **`repetition-rules.json`** — the house's overused words ("strong" 31×,
  "recurring" 28×, "offering" 19×, "driven by" 17×) with alternatives + rules.
- **`corpus-bullets.json`** — the 753 real bullets, tagged by slide family
  (structure/tone reference; never copy verbatim into unrelated deals).
- **`corpus.html`** — visual browser of all the above.
- Fact/evidence traceability model: `../schemas/evidence.schema.json`.

Completion (Plan §7–8): the system can produce varied, Kumulus-style,
evidence-backed bullets without copying source language, and every factual
claim can trace to a source page.
