import React from "react";
/** KpiInlineTriplet — a lightweight inline KPI row: 3 cells separated by
 * hairlines, each a figure over a small-caps label. The un-filled alternative
 * to the solid KpiTileGrid. */
export function KpiInlineTriplet({ cells = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", ...style }}>
      {cells.map((c, i) => (
        <div key={i} style={{ flex: 1, textAlign: "center", padding: "4px 10px", borderLeft: i ? "var(--rule-separator)" : "none" }}>
          <div style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-kpi)" }}>{c.value}</div>
          <div style={{ fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>{c.label}</div>
        </div>
      ))}
    </div>
  );
}
