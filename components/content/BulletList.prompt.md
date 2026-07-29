# BulletList
Square-bullet (or ▷ triangle) copy list — carries most IM body text. Supports nested sub-items.

```jsx
<BulletList items={[
  "Active across a broad spectrum of industries",
  {text:"Recurring revenue base", items:["Consumables","Service contracts"]},
]} />
<BulletList marker="triangle" items={[...]} />
```
Props: items (string | {text,sub,items}), size ("md"|"sm"), dense, marker ("square"|"triangle"). Body stays one size — don't shrink to fit.