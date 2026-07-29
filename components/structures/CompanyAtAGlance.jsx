import React from "react";
import { KpiTileGrid } from "../content/KpiTileGrid.jsx";
import { BulletList } from "../content/BulletList.jsx";
import { ColumnChart } from "../charts/ColumnChart.jsx";
import { DashboardPanel } from "../charts/DashboardPanel.jsx";
import { PanelHeader } from "../content/PanelHeader.jsx";

/**
 * CompanyAtAGlance — SlideStructure STR-COMPANY-AT-A-GLANCE. Company snapshot:
 * left KPI tile grid over a narrative bullet list; right a financial ColumnChart
 * over a DashboardPanel (donut row). All four slots required. Inside a SlideFrame.
 */
export function CompanyAtAGlance({ kpis = [], narrative = [], chart, chartTitle = null, dashboard = [], ratio = "0.85fr 1.6fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: ratio, gap: "var(--col-gap)", height: "100%", alignItems: "start", ...style }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <KpiTileGrid tiles={kpis} columns={3} />
        <BulletList items={narrative} size="sm" dense />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ border: "var(--border-hair)", borderRadius: 3, padding: 12 }}>
          {chartTitle ? <PanelHeader>{chartTitle}</PanelHeader> : null}
          <ColumnChart {...chart} />
        </div>
        <DashboardPanel cells={dashboard} />
      </div>
    </div>
  );
}
