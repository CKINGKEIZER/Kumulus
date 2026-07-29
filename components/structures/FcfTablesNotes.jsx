import React from "react";
import { FinancialTable } from "../data/FinancialTable.jsx";
import { LabeledNotes } from "../content/LabeledNotes.jsx";

/**
 * FcfTablesNotes — SlideStructure STR-FIN-FCF-TABLES-NOTES. Business-plan free
 * cash flow: a left column of stacked FinancialTables (reported NWC, capex,
 * FCF bridge) + a right LabeledNotes panel. Render inside a SlideFrame.
 */
export function FcfTablesNotes({ tables = [], notes = [], ratio = "1.4fr 1fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: ratio, gap: "var(--col-gap)", height: "100%", alignItems: "start", ...style }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {tables.map((t, i) => <FinancialTable key={i} {...t} />)}
      </div>
      <LabeledNotes groups={notes} boxed />
    </div>
  );
}
