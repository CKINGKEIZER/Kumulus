# ComparisonMatrix / HarveyBall
Capability / competitive / field-description matrix. Cells: number 0–4 → HarveyBall; true/false → check/dash; else text. Optional vertical deal-primary tab.

```jsx
<ComparisonMatrix tabLabel="Competitors" firstColHead="Player"
  columns={[{label:"Scale"},{label:"Service"}]}
  rows={[{label:"Target",cells:[3,4]},{label:"Rival A",cells:[4,2]}]} />
<HarveyBall level={3} />
```