# WaterfallChart
IM bridge / waterfall (PRIM-CHART-WATERFALL). Anchor total columns at each end + floating signed driver bars between; values above, labels beneath.

```jsx
<WaterfallChart height={300} formatValue={(n)=>n.toFixed(1)}
  items={[
    {label:"Revenue FY21A", value:10.1, kind:"anchor"},
    {label:"Consulting", value:1.0},
    {label:"Explosion protection", value:2.5},
    {label:"Trading", value:0.1},
    {label:"Revenue FY26E", value:15.5, kind:"anchor"},
  ]} />
```
`kind:"anchor"` = absolute total column; omit for a delta that steps from the running total. Pass `display` for a pre-formatted value string.
