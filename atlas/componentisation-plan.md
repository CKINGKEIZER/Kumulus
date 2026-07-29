# Componentisation plan — from indexed blocks to a working slide-building tool

Status: indexing complete (307/307 slides, 255 blocks in `block-library.json`).
This document defines how we turn that observation set into a **tool that builds
slides** — the rebuild-plan's **Phase B (Structure Library)** — without cutting
corners. It is the source of truth for the `component-queue.json` batches.

## The problem this fixes (why granularity first)

`block-library.json` is an *observation log*: 255 entries, but **146 are
whole-slide-scale composites** and only 17 are reused. You cannot generate from
that — a generator needs a small, deduplicated set of **atomic bricks** and a set
of **skeletons** that arrange them. So we factor the 255 observations into three
clean layers:

| Layer | Artifact | What it is | Unit |
|---|---|---|---|
| 0. Observations | `block-library.json` (exists) | every block as seen, per slide | 255 entries |
| 1. **Primitives** | `primitives.json` (new) | atomic, fixed-size, corner-anchored bricks with a copy-recipe + token refs; extends the 20 in `building-blocks.json` | ~45–70 |
| 2. **Structures** | `structures.json` (new) | `SlideStructure` skeletons: a grid + ordered named slots that each take a primitive; a density contract | 30–45 |
| 3. **Code** | `components/structures/*` (new) | each skeleton as JSX + `.d.ts` + `.prompt.md` demo, rendering inside `SlideFrame`, tokens hard-coded | 30–45 |

Layer 1 is the **granularity decision made concrete**: high-reuse composites
(e.g. `FINTABLE-NUMBERED-COMMENTARY`, seen 8×) are split into their sub-bricks
(`FinYearTable` + `NumberedCommentaryColumn`); low-reuse one-offs (glossary,
facility) stay whole. Statement identity (P&L vs balance sheet) lives in the
template registry, **never** in a block/primitive id.

## Foundation already in place (do not rebuild)

- **Tokens** (`tokens/*.css`): the 4-size type law (`--fs-title` 18.7px /
  `--fs-body` 12.7px / `--fs-footnote` 9.3px / `--fs-kpi`), margins
  (`--slide-margin-x` 20px), house shadow, rules. Primitives reference these
  token names — no px font literals.
- **Chrome components** (`components/layout/*`): `SlideFrame` (content/cover/
  divider variants, title zone, footer chrome, ToC panel), `SectionBar`,
  `FooterNav`, `VerticalTab`. Much of Layer-1 chrome already exists as code;
  the primitive catalog documents and maps to it, and flags what is missing.
- **Canvas frame / block-sizing laws** (`canvas-frame.md`, `block-sizing-law.md`):
  content region x 20→1260 (1240px) · y 84→672 (588px); blocks are fixed-size,
  corner-anchored, tessellated — never stretched.

### Known foundation defects to fix in Phase F (logged, not silently carried)
- `tokens/canvas.css` still sets `--density-title: 22px` (and `.density-regular`
  overrides `--fs-title`); the law is 18.7px. Reconcile during enforcement.

## Primitive record schema (`primitives.json`)

```
{
  "id": "PRIM-<FAMILY>-<NAME>",     // structural, never statement-named
  "name": "...", "role": "chrome|kpi|chart|table|panel|narrative|process|timeline|matrix|diagram|media|logo",
  "size_px": { "w": N, "h": M },     // FIXED at 1280x720 scale
  "variants": [ { "label": "3col", "w": N, "h": M } ],   // optional fixed alternates
  "anchor": "top-left|top-right|bottom-left|bottom-right|full-bleed|docked",
  "exit_width": "leftover docking slot it leaves (px + which primitive docks)",
  "grid": "internal sub-cell spec, all text 9.5pt",
  "tokens": ["--deal-primary", "--fs-body", ...],   // tokens it must reference
  "recipe": "exact copy-recipe: px sizes, gaps, fills, borders",
  "component": "components/....jsx | TBD",           // existing code or gap
  "fromBlocks": ["BLK-..."],                         // provenance in block-library
  "seenOn": ["LTP-005", "TOR-64"]                    // representative slides
}
```

## Structure skeleton schema (`structures.json`)

```
{
  "id": "STR-<ARCHETYPE>-<NAME>",
  "name": "...", "archetype": "financial-statements|at-a-glance|market-sizing|...",
  "grid": "explicit: columns/rows, spans, gutters, band heights in px",
  "slots": [ { "slot": "table", "primitive": "PRIM-TBL-FIN-YEAR", "anchor": "top-left", "w": 720, "required": true } ],
  "density": "N slots, all required (a skeleton with an empty slot is invalid)",
  "fromComposites": ["BLK-REAL-TOR-FINTABLE-NUMBERED-COMMENTARY"],
  "exemplars": ["TOR-64", "TOR-69"],                 // real renders to diff against
  "component": "components/structures/....jsx | TBD"
}
```

## Batch plan (see `component-queue.json` for status)

**Stage G1 — Primitive extraction** (9 batches, by family). Walk the 255 blocks;
extract/dedupe atomic primitives into `primitives.json`. Order puts shared chrome
first because every skeleton depends on it.

- G1-01 Chrome & frame · G1-02 KPI & hero numbers · G1-03 Charts I (series) ·
  G1-04 Charts II (share/flow) · G1-05 Tables · G1-06 Panels & narrative ·
  G1-07 Process/flow/timeline · G1-08 Matrix & diagram · G1-09 Media & facility

**Stage G2 — Structure specs** (6 batches, by archetype). Cluster the 146
composites into skeletons; write precise geometry into `structures.json`.

**Stage G3 — Skeleton components** (6 batches, mirror G2). Build
`components/structures/*` (JSX + `.d.ts` + `.prompt.md`), each **verified
side-by-side against its exemplar render** before it is marked done (the
rebuild-plan acceptance bar). No skeleton advances on a failed diff.

**Stage G4 — Wire + enforce** (Phase E/F): point `template-registry.json` at
skeletons; density + type + margin guards. Scoped after the library exists.

## Working rules (the no-corners contract)

1. One batch at a time; each batch is committed and paused for review.
2. Every primitive carries fixed px, an anchor, an exit-width, token refs, a
   recipe, and provenance — or it is not done.
3. Never invent geometry: measure from the real render (thumbs) or an existing
   token/component. Unknowns are marked `TBD`, never guessed.
4. Reuse over duplication: a new primitive must not restate an existing one; add
   a `variant` or a `seenOn` instead.
5. Skeletons are verified against real renders before being called done.
