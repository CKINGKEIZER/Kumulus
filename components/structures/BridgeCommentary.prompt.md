# BridgeCommentary (skeleton)
STR-FIN-BRIDGE-COMMENTARY — a WaterfallChart bridge band + a numbered driver-commentary panel. Inside `<SlideFrame variant="content">`.

```jsx
<BridgeCommentary bridgeTitle="Revenue bridge — business plan"
  bridge={{ height:300, items:[{label:"FY21A",value:10.1,kind:"anchor"},{label:"Proprietary tech",value:2.0},{label:"FY26E",value:15.5,kind:"anchor"}] }}
  commentary={[{n:1, body:"Proprietary technologies add €2.0m over the plan."}]} />
```
