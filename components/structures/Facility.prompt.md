# Facility (skeleton)
STR-FACILITY — 3-column facility-tour gallery (floorplans + photos + labelled panels). Inside `<SlideFrame variant="content">`.

```jsx
<Facility columns={[
  [<PanelHeader>Demo room</PanelHeader>, <PhotoPanel src="/assets/demo.jpg" />],
  [<Floorplan title="Ground floor" src="/assets/gf.png" />, <Floorplan title="First floor" src="/assets/ff.png" />],
  [<PanelHeader>Warehouse</PanelHeader>, <PhotoPanel src="/assets/wh.jpg" />],
]} />
```
