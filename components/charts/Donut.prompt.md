# Donut
Segmented share/split chart (revenue mix, segmentation, tenure). Colours from `--deal-chart-*`, optional centre label + side legend.

```jsx
<Donut size={150} legend centerLabel="FY24A"
  segments={[{value:41,label:"Orthopedics"},{value:27,label:"Urology"},{value:32,label:"Other"}]} />
```
Props: segments[{value,label,color}], size, thickness, centerLabel, centerSub, legend, gap.