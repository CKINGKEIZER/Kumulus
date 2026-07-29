# NumberedHighlight
One row of the "Key investment highlights" layout: deal-primary panel (number + icon + small-caps title) · bulleted claim card · visual card.

```jsx
<NumberedHighlight number={1} title="Strong market position"
  icon={<Icon/>} bullets={["Resilient sector","High barriers to entry"]}
  visual={<Donut size={96} segments={[...]} />} />
```
Stack 4–5 in a grid (rows: repeat(N,1fr)) filling the slide.