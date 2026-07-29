# SectionBar
Deal-primary banner heading a content block: rounded bar with white end-knobs, centered small-caps title, optional trailing chip slot (SDG tiles, logos). variant="chevron" for case-study CONTEXT→APPROACH→RESULT headers.

```jsx
<SectionBar label="Integrated offering" />
<SectionBar label="Planet" trailing={<img src="sdg.png"/>} />
<SectionBar variant="chevron" label="Context" />
```