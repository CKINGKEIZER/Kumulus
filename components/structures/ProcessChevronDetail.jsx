import React from "react";
import { ProcessFlow } from "../diagrams/ProcessFlow.jsx";
import { BulletList } from "../content/BulletList.jsx";

/**
 * ProcessChevronDetail — SlideStructure STR-PROCESS-CHEVRON-DETAIL. N chevron
 * step headers (ProcessFlow) over a detail column of bullets per step. Density
 * contract: every step gets a filled detail column. Inside a SlideFrame.
 */
export function ProcessChevronDetail({ steps = [], details = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%", ...style }}>
      <ProcessFlow steps={steps} />
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${details.length || 1}, 1fr)`, gap: 16 }}>
        {details.map((d, i) => <BulletList key={i} items={d} size="sm" dense />)}
      </div>
    </div>
  );
}
