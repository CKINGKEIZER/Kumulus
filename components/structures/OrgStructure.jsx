import React from "react";
import { Tree } from "../diagrams/Tree.jsx";

/**
 * OrgStructure — SlideStructure STR-ORG-STRUCTURE. An org Tree + an optional
 * headcount chart/commentary. Inside a SlideFrame.
 */
export function OrgStructure({ tiers = [], headcount = null, ratio = "1.3fr 1fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: headcount ? ratio : "1fr", gap: "var(--col-gap)", height: "100%", alignItems: "center", ...style }}>
      <Tree tiers={tiers} />
      {headcount ? <div>{headcount}</div> : null}
    </div>
  );
}
