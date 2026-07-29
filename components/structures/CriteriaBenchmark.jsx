import React from "react";
import { ComparisonMatrix } from "../data/ComparisonMatrix.jsx";

/**
 * CriteriaBenchmark — SlideStructure STR-CRITERIA-BENCHMARK. A ComparisonMatrix
 * (criteria rows × description/benchmark columns, harvey-ball ratings) + an
 * optional positioning panel. Also serves the trend/impact table. Inside a SlideFrame.
 */
export function CriteriaBenchmark({ matrix, positioning = null, ratio = "1.8fr 1fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: positioning ? ratio : "1fr", gap: "var(--col-gap)", height: "100%", alignItems: "start", ...style }}>
      <ComparisonMatrix {...matrix} />
      {positioning ? <div>{positioning}</div> : null}
    </div>
  );
}
