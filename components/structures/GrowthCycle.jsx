import React from "react";
import { CycleRing } from "../diagrams/CycleRing.jsx";
import { NumberedHighlight } from "../feature/NumberedHighlight.jsx";

/**
 * GrowthCycle — SlideStructure STR-GROWTH-CYCLE. A flywheel / cycle ring
 * (CycleRing) + optional numbered detail rows substantiating each stage.
 * Inside a SlideFrame.
 */
export function GrowthCycle({ cycle = [], centerLabel = null, detail = [], ratio = "1fr 1fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: detail.length ? ratio : "1fr", gap: "var(--col-gap)", height: "100%", alignItems: "center", ...style }}>
      <CycleRing stages={cycle} centerLabel={centerLabel} />
      {detail.length ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {detail.map((d, i) => <NumberedHighlight key={i} number={i + 1} title={d.title} bullets={d.bullets} />)}
        </div>
      ) : null}
    </div>
  );
}
