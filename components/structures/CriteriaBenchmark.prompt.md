# CriteriaBenchmark (skeleton)
STR-CRITERIA-BENCHMARK — a ComparisonMatrix (criteria × benchmark, harvey-ball ratings) + optional positioning panel. Inside `<SlideFrame variant="content">`.

```jsx
<CriteriaBenchmark matrix={{
  firstColHead:"Criteria",
  columns:[{label:"Description"},{label:"Benchmark"},{label:"Company X"}],
  rows:[{label:"Scale", cells:["Top-3 in Benelux", 3, 4]}, {label:"Recurring revenue", cells:["Maintenance-led", 2, 4]}],
}} />
```
