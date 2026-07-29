import React from "react";
import { NumberedHighlight } from "../feature/NumberedHighlight.jsx";

/**
 * InvestmentHighlights — SlideStructure STR-INVESTMENT-HIGHLIGHTS-ROWS. A stack
 * of 4–6 numbered highlight rows (deal panel + claim + bullets + a visual).
 * Density contract: demands grounded highlights, not a sparse list. Inside a SlideFrame.
 */
export function InvestmentHighlights({ highlights = [], className = "", style = {} }) {
  if (process.env.NODE_ENV !== "production" && highlights.length < 3) {
    console.warn("InvestmentHighlights: expects 4–6 grounded highlights.");
  }
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 12, height: "100%", ...style }}>
      {highlights.map((h, i) => (
        <NumberedHighlight key={i} number={h.number != null ? h.number : i + 1} title={h.title} icon={h.icon} bullets={h.bullets} visual={h.visual} />
      ))}
    </div>
  );
}
