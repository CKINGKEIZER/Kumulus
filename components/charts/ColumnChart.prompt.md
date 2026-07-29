# ColumnChart
The workhorse IM bar/column chart. Series colours from `--deal-chart-*`; in-segment value labels; totals above; category axis.

```jsx
<ColumnChart height={200} showTotals
  data={[{label:"FY23A",value:16.6},{label:"FY24A",value:19.1}]} />
<ColumnChart mode="stacked" seriesLabels={["Consumables","Service"]}
  data={[{label:"'25",segments:[{value:72,label:"72%"},{value:28,label:"28%"}]}]} />
```
Modes: stacked · grouped · simple. Pair with CagrPill / MarginCapsule.