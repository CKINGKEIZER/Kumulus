# CompetitionMatrix (skeleton)
STR-COMPETITION-MATRIX — a Matrix2x2 positioning map or a ComparisonMatrix coverage table, + optional profile panel. Inside `<SlideFrame variant="content">`.

```jsx
<CompetitionMatrix
  landscape={<Matrix2x2 xAxis={{label:"Product focus"}} yAxis={{label:"Reach"}} items={[{x:0.8,y:0.8,label:"Company X",highlight:true}]} />}
  profile={<PanelHeader>Our position</PanelHeader>} />
```
