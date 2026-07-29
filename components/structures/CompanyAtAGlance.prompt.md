# CompanyAtAGlance (skeleton)
STR-COMPANY-AT-A-GLANCE — left KPI tiles + narrative, right financial chart + donut dashboard. Inside `<SlideFrame variant="content">`. All four slots required.

```jsx
<CompanyAtAGlance
  kpis={[{value:"€18.1M",label:"Revenue"},{value:"75%",label:"Recurring"},{value:"€3.2M",label:"EBITDA"}]}
  narrative={["Independent full-service distributor of medical devices in the Benelux","Broad range of specialised fields"]}
  chartTitle="Robust financial profile (€m)"
  chart={{mode:"stacked",height:200,showTotals:true,data:[...]}}
  dashboard={[{title:"Product types", chart:<Donut segments={[...]} />}]} />
```
