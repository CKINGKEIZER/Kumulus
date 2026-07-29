import React from "react";
import { ValueCapsule } from "./ValueCapsule.jsx";

/**
 * BarRow — one horizontal bar in a labelled bar chart: a small-caps row
 * label, a navy bar scaled to `value/max`, and a trailing ValueCapsule.
 * Compose several to build the bar charts seen throughout the IM.
 */
export function BarRow({
  label,
  value,
  max,
  display = null,
  labelWidth = "82px",
  barColor = "var(--chart-1)",
  capsuleTone = "sky",
  className = "",
  style = {},
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      className={className}
      style={{ display: "flex", alignItems: "center", gap: "10px", ...style }}
    >
      <div
        style={{
          width: labelWidth,
          flex: "0 0 auto",
          fontFamily: "var(--font-sans)",
          fontWeight: "var(--fw-bold)",
          fontSize: "var(--fs-label)",
          letterSpacing: "var(--ls-caps)",
          textTransform: "uppercase",
          color: "var(--text-heading)",
        }}
      >
        {label}
      </div>
      <div style={{ flex: "1 1 auto", display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            height: "13px",
            width: `${pct}%`,
            minWidth: "2px",
            background: barColor,
            borderRadius: "1px",
          }}
        />
        <ValueCapsule tone={capsuleTone}>{display != null ? display : value}</ValueCapsule>
      </div>
    </div>
  );
}
