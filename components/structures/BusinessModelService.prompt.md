# BusinessModelService (skeleton)
STR-BUSINESS-MODEL-SERVICE — the offering (Tree/panel) + how it makes money (revenue-stream table/dashboard). Inside `<SlideFrame variant="content">`.

```jsx
<BusinessModelService
  offering={<Tree tiers={[{nodes:[{label:"Explosion safety"}]},{nodes:[{label:"Detection"},{label:"Suppression"},{label:"Isolation"}]}]} />}
  streams={<ComparisonMatrix columns={[{label:"Model"},{label:"Recurring?"}]} rows={[{label:"Installs",cells:["Project",false]},{label:"Service",cells:["Contract",true]}]} />} />
```
