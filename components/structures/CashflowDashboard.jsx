import React from "react";
import { FinancialTable } from "../data/FinancialTable.jsx";
import { ColumnChart } from "../charts/ColumnChart.jsx";
import { LabeledNotes } from "../content/LabeledNotes.jsx";
import { PanelHeader } from "../content/PanelHeader.jsx";

/**
 * CashflowDashboard — SlideStructure STR-FIN-CASHFLOW-DASHBOARD. Historical cash
 * flow: a left column of mini FinancialTables + a right column of a (stacked)
 * ColumnChart over a LabeledNotes panel. Render inside a SlideFrame.
 */
export function CashflowDashboard({ tables = [], chart, chartTitle = null, notes = [], ratio = "0.9fr 1.6fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: ratio, gap: "var(--col-gap)", height: "100%", alignItems: "start", ...style }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {tables.map((t, i) => <FinancialTable key={i} {...t} />)}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ border: "var(--border-hair)", borderRadius: 3, padding: 12 }}>
          {chartTitle ? <PanelHeader>{chartTitle}</PanelHeader> : null}
          <ColumnChart {...chart} />
        </div>
        <LabeledNotes groups={notes} boxed />
      </div>
    </div>
  );
}
