import React from "react";

/**
 * CustomerDeepDive — SlideStructure STR-CUSTOMER-DEEPDIVE. 2–3 bordered chart
 * panels (cohort / churn / ARR, passed as `panels`) over an optional client
 * table. Density contract: several coordinated customer views. Inside a SlideFrame.
 */
export function CustomerDeepDive({ panels = [], clients = null, className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%", ...style }}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${panels.length || 1}, 1fr)`, gap: 16 }}>
        {panels.map((p, i) => <div key={i} style={{ border: "var(--border-hair)", borderRadius: 3, padding: 12 }}>{p}</div>)}
      </div>
      {clients ? <div>{clients}</div> : null}
    </div>
  );
}
