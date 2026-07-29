# SlideFrame
The fixed 1280×720 chrome every slide sits in. variant "content" (title + body + footer), "cover" (full-bleed themed cover), "divider" (section opener / frosted ToC). Footer: Kumulus mark left, target logo right (yellow placeholder fallback).

```jsx
<SlideFrame title="Highly diversified customer base"
  subtitle="Broad client portfolio"
  projectName="Project [x] | [Month] [Year]"
  sectionTabs={[{n:"3",label:"Business overview"}]} activeTab="3" pageNumber={33}
  note="Note: (1) ...">
  {/* body */}
</SlideFrame>
<SlideFrame variant="cover" coverTitle="Project [x] – Information Memorandum" coverDate="[Month] [Year]" />
<SlideFrame variant="divider" sections={[{num:"I",label:"Executive summary"}]} activeSection="I" />
```
Always wrap the slide root in a theme class (.theme-bemedico etc).