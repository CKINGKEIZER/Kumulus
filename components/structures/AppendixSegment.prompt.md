# AppendixSegment (skeleton)
STR-APPENDIX-SEGMENT — Torino product-segment deep-dive: badge + title + BrandNav header, then narrative + product panels + strategic-vision chart. Whole slide (owns its margins).

```jsx
<AppendixSegment badge="A" title="Earthing" subtitle="Explosion prevention through discharge of electrostatic charge"
  brandNav={<BrandNav brands={["ISMA","StuvEx","IExT"]} activeBrand="StuvEx" geographies={["EU"]} />}
  narrative={<BulletList items={["Prevents electrostatic discharge sparks","Main industries: storage, food, chemicals"]} />}
  panels={[<PanelHeader>Components</PanelHeader>]}
  vision={<ColumnChart data={[...]} />} />
```
