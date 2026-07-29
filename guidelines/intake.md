# Intake — turn a messy request into a clean brief (Step 0, do this FIRST)

The biggest quality lever is not the components — it is understanding the
request. Users give vague, partial, or mixed input (a sentence, a pasted table,
a screenshot of a slide, a hand sketch, "make it like this"). If you jump
straight to building, you build the wrong thing well.

**So: before anything else, rewrite the request into an explicit internal
Brief that the build procedure (`SKILL.md` → `routing/skeleton-index.md`) can
execute without guessing.** Do not show the raw user their brief unless they
ask — it is your working translation.

## The procedure

1. **Read *everything* the user gave**, in every modality:
   - prose (the ask, the tone, the deal context),
   - numbers / pasted tables / attached data,
   - **any image** — a screenshot of an existing slide, a competitor's slide, a
     hand sketch, a photo of a whiteboard, a wireframe.
2. **If an image or structure is provided, translate it — do not copy it.**
   - Describe the layout in words: how many regions, what's in each (a table? a
     chart? bullets? a KPI band? a diagram?), how the space is divided.
   - Map that structure to the **nearest skeleton** in `routing/skeleton-index.md`
     (which grid, which slots). The picture tells you the *structure and intent*;
     the Kumulus house style + the skeleton supply the *execution*. Never
     reproduce a competitor's exact styling — extract what they're *saying* and
     rebuild it as a Kumulus slide.
   - If the image is a data source (a table, a chart with numbers), read the
     figures into facts — those are real inputs, not to be invented.
3. **Restate the ask as a per-slide Brief** (template below). One slide = one
   intent sentence = one skeleton.
4. **Bind facts to the skeleton's slots.** For the chosen skeleton, list each
   required slot and the value that fills it. Every number must come from the
   user (prose, table, or image) or be marked `[x]` / `[-]`. **Never invent a
   figure to fill a slot** — that is the cardinal sin.
5. **Flag the gaps.** If a *blocker* is missing (which deal? real financials?
   which section? which of two plausible skeletons?), ask **1–3 sharp questions**
   and stop. If only non-blocking details are missing, proceed and mark them
   `[x]`. Prefer building with placeholders over interrogating.
6. **Capture deal context once** into a `DealProfile` (`schemas/deal-profile.schema.json`):
   target company, industry, theme class, logos, geographies. It applies to
   every slide and drives theming + terminology.
7. **Hand the Brief to "How to build a slide."**

## Brief template (internal)

```
DEAL: <target company> · <industry> · <deal codename> · theme=<.theme-bemedico|.theme-irmaco|…>
ASSETS: <target logo? third-party logos? photos? data file? source image?>
SLIDES: <N>

SLIDE <i>
  intent:   <the single claim this slide must prove, one sentence>
  skeleton: <Name> (via skeleton-index — <family>)      # e.g. FinancialStatement
  source:   <if from an image/sketch: the structure you read from it, mapped to the slots>
  facts (slot → value):
    <slot>: <value from user/table/image, or [x] / [-]>
    …
  copy:     <headline angle + any must-say points; house voice, sentence-case serif title>
  confirm:  <blocking questions, if any — else "none">
```

## Worked example — a vague prompt *with a picture*

> User: *"here's a slide from another deal 📎[screenshot: a P&L table on the
> left, ~10 rows with a few numbered yellow circles, and a column of numbered
> notes on the right]. do our version, it's for Project Torino, numbers are in
> the sheet I sent."*

Normalized Brief:

```
DEAL: Irmaco · industrial explosion-safety · Project Torino · theme=.theme-irmaco
ASSETS: source screenshot (structure only), data sheet (real figures)
SLIDES: 1

SLIDE 1
  intent:   Show Irmaco's historical P&L and explain each line's movement.
  skeleton: FinancialStatement (financial-statements)   # the screenshot = table-left + numbered-commentary-right → this skeleton exactly
  source:   image shows FIN-YEAR table (rows × year cols, numbered row markers) + NUMBERED-COMMENTARY rail → the two slots of FinancialStatement
  facts (slot → value):
    table.columns: FY19A, FY20A, FY21A, CAGR            # from the sheet
    table.rows:    <lines + values from the sheet, negatives in (…)>  # real, not invented
    table.markers: 1,2,3,6,7,9 on the noted rows
    commentary:    one note per marker <from the sheet's notes, or [x] if absent>
  copy:     sentence-case serif title "Historical – reported profit & loss statement"
  confirm:  none — data supplied; build it.
```

→ hand to `SKILL.md`: render `FinancialStatement` inside `SlideFrame`, theme
`.theme-irmaco`, fill the two slots, mark any missing note `[x]`.

The user gave a fuzzy sentence + a picture; the Brief turned it into an exact
skeleton + slot bindings with real data and no invented numbers. That is the
job of Step 0.
