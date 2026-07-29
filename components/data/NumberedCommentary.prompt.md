# NumberedCommentary
The numbered commentary rail that pairs with a FinancialTable. Deal-accent number chips key to the table's row markers; body-size paragraphs with optional triangle sub-bullets; optional hairline box.

```jsx
<NumberedCommentary
  boxed
  items={[
    {n:1, body:"Increase in consulting (ISMA) in FY21A in line with demand; ISMA plans to grow its base and geographical reach."},
    {n:2, body:"Large project sales in FY19A cause negative growth over the period but expected to turn positive.",
      bullets:["Drop in FY20A linked to Covid (see next slide)"]},
    {n:7, body:"Individual segment gross margins kept constant at FY21A levels."},
  ]} />
```
Chip numbers must match the `marker` values on the paired FinancialTable rows. Pass `columns={2}` for a wide rail. All text is body size.
