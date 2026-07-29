# AcqTargetScan
M&A target scan table: header band + flag/badge/financials/description/rationale/coverage-ticks rows. Cells: text, boolean (tick/cross), or an array (bullets).

```jsx
<AcqTargetScan columns={["HQ","Co.","Rev","Description","Rationale","Consulting","Ex. protection"]}
  rows={[{cells:["BE","6","n.a.","University spin-off",["Acquire testing know-how","Accelerate EBITDA"],true,false]}]} />
```
