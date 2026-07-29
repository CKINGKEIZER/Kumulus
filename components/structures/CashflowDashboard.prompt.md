# CashflowDashboard (skeleton)
STR-FIN-CASHFLOW-DASHBOARD — left mini FinancialTables + right (stacked ColumnChart over LabeledNotes). Inside `<SlideFrame variant="content">`.

```jsx
<CashflowDashboard
  tables={[nwcTable, capexTable, fcfTable]}
  chartTitle="FY21A"
  chart={{ mode:"stacked", height:200, data:[{label:"Mar", segments:[{value:1485},{value:1468},{value:1626}]}] }}
  notes={[{label:"Net working capital", items:["…"]},{label:"Capex", items:["…"]},{label:"Operational free cash flow", items:["…"]}]} />
```
