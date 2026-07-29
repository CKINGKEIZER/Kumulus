# DashboardPanel
Grey panel hosting N labelled chart cells (Donut / ColumnChart) separated by hairlines.

```jsx
<DashboardPanel cells={[
  {title:"Revenue split", chart:<Donut segments={[...]} centerLabel="€[x]m" />},
  {title:"Recurring", chart:<Donut segments={[...]} />},
]} />
```
