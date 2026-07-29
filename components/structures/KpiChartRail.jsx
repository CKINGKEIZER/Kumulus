import React from "react";
import { ColumnChart } from "../charts/ColumnChart.jsx";
import { PanelHeader } from "../content/PanelHeader.jsx";

/**
 * KpiChartRail — SlideStructure STR-KPI-CHART-RAIL. A top rail of chart columns
 * (each titled) over a full-width supporting panel. Inside a SlideFrame.
 */
export function KpiChartRail({ charts = [], panel = null, panelTitle = null, className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%", ...style }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.max(1, charts.length)}, 1fr)`, gap: 16 }}>
        {charts.map((c, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {c.title ? <PanelHeader tone="transparent">{c.title}</PanelHeader> : null}
            <ColumnChart {...c.chart} />
          </div>
        ))}
      </div>
      <div style={{ border: "var(--border-hair)", borderRadius: 3, padding: 12 }}>
        {panelTitle ? <PanelHeader>{panelTitle}</PanelHeader> : null}
        {panel}
      </div>
    </div>
  );
}
