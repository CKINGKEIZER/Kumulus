# Tree
Layered hierarchy — rows of boxes joined top→bottom (org chart, ownership, service tree, architecture stack). Tier 0 = deal-primary parent.

```jsx
<Tree tiers={[
  {label:"Shareholders", nodes:[{label:"Founders 60%"},{label:"PE 30%"},{label:"Mgmt 10%"}]},
  {nodes:[{label:"Irmaco NV"}]},
  {label:"Operating entities", nodes:[{label:"StuvEx Int'l"},{label:"StuvEx UK"},{label:"IExT"}]},
]} />
```
