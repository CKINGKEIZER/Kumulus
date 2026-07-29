# FinancialTable
IM financial statement / KPI table (P&L, BS, CF, QoE). Deal-primary headers, grey subtotal bands, parenthesised negatives, numbered commentary markers, italic KPI footer.

```jsx
<FinancialTable
  columns={[{label:"FY23A"},{label:"FY24A"},{label:"CAGR"}]}
  rows={[
    {label:"Net revenue",values:["14.8","16.6","8.4%"],subtotal:true,marker:1},
    {label:"EBITDA",values:["2.0","2.9","19.5%"],subtotal:true},
  ]}
  kpis={[{label:"EBITDA margin",values:["13.6%","17.7%",""]}]}
  note="Note: (1) Excluding goodwill" />
```
Pass values pre-formatted (control rounding + "(1.2)" negatives). Row flags: bold, subtotal, indent, italic, marker.