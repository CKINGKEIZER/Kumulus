# OrgStructure (skeleton)
STR-ORG-STRUCTURE — org Tree + optional headcount chart. Inside `<SlideFrame variant="content">`.

```jsx
<OrgStructure tiers={[{nodes:[{label:"CEO"}]},{nodes:[{label:"COO"},{label:"CFO"},{label:"CTO"}]}]}
  headcount={<ColumnChart mode="stacked" data={[...]} />} />
```
