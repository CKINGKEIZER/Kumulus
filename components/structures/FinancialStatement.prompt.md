# FinancialStatement (skeleton)
SlideStructure STR-FIN-STATEMENT-COMMENTARY — the financial workhorse: a FinancialTable left + a NumberedCommentary rail right, filling the content region. Render inside `<SlideFrame variant="content">`. Both slots required; table `marker`s key to commentary numbers.

```jsx
<SlideFrame variant="content" title="Historical — reported profit & loss statement"
  projectName="Project Torino | June 2022" pageNumber="64"
  sectionTabs={[{n:1},{n:2},{n:3},{n:"A"}]} activeTab={3}>
  <FinancialStatement
    table={{
      columns:[{label:"FY19A"},{label:"FY20A"},{label:"FY21A"},{label:"CAGR"}],
      rowLabelHead:"€k",
      rows:[
        {label:"Consulting (ISMA)", values:["389","382","453","7.9%"], marker:1},
        {label:"Revenue", values:["8,973","11,310","9,760","4.3%"], subtotal:true},
        {label:"Direct costs", values:["(4,551)","(5,586)","(4,421)","(1.4%)"], marker:7},
        {label:"EBITDA", values:["474","1,865","1,103","52.5%"], subtotal:true},
      ],
      kpis:[{label:"EBITDA margin (%)", values:["5.3%","16.5%","11.3%",""]}],
      note:"Note: (1) technical sales, limited engineering required",
    }}
    commentary={[
      {n:1, body:"Increase in consulting (ISMA) in FY21A in line with demand."},
      {n:7, body:"Mainly purchases, subcontracting, and inbound/outbound transport."},
    ]} />
</SlideFrame>
```
Variants: actuals (FY__A + CAGR), business-plan (grey actual col + forecast + CAGR), single-period bridge. Use `commentaryColumns={2}` for a wide rail.
