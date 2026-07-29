import React from "react";
import { PanelHeader } from "./PanelHeader.jsx";
import { BulletList } from "./BulletList.jsx";

/**
 * LabeledNotes — a stack of small-caps sub-headers each over a bullet list
 * (the "NET WORKING CAPITAL / CAPEX / OPERATIONAL FREE CASH FLOW" notes panel,
 * and the strategic-vision outlook blocks). Composes PanelHeader + BulletList.
 */
export function LabeledNotes({ groups = [], boxed = false, className = "", style = {} }) {
  return (
    <div
      className={className}
      style={{
        display: "flex", flexDirection: "column", gap: 12,
        ...(boxed ? { border: "var(--border-hair)", borderRadius: 3, padding: 12 } : {}),
        ...style,
      }}
    >
      {groups.map((g, i) => (
        <div key={i}>
          <PanelHeader tone="transparent" style={{ justifyContent: "flex-start", padding: "0 0 4px" }}>{g.label}</PanelHeader>
          <BulletList items={g.items} size="sm" dense />
        </div>
      ))}
    </div>
  );
}
