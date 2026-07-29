import React from "react";
import { ComparisonMatrix } from "../data/ComparisonMatrix.jsx";

/**
 * TrendImpact — SlideStructure STR-TREND-IMPACT. A full-width ComparisonMatrix
 * of market trends × description × impact rating. Inside a SlideFrame.
 */
export function TrendImpact({ matrix, className = "", style = {} }) {
  return (
    <div className={className} style={{ height: "100%", ...style }}>
      <ComparisonMatrix {...matrix} />
    </div>
  );
}
