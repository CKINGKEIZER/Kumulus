import React from "react";
import { PanelHeader } from "../content/PanelHeader.jsx";

/**
 * DashboardPanel — a grey panel hosting N labelled chart cells side by side,
 * separated by hairlines (the 3-graph "financial profile / KPI dashboard"
 * block). Each cell = a small-caps header + a chart element (Donut, ColumnChart…).
 */
export function DashboardPanel({ cells = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ background: "var(--surface-band)", borderRadius: 3, padding: 12, display: "grid", gridTemplateColumns: `repeat(${Math.max(1, cells.length)}, 1fr)`, ...style }}>
      {cells.map((c, i) => (
        <div key={i} style={{ padding: "0 12px", borderLeft: i ? "var(--rule-separator)" : "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          {c.title ? <PanelHeader tone="transparent">{c.title}</PanelHeader> : null}
          {c.chart}
        </div>
      ))}
    </div>
  );
}
