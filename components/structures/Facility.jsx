import React from "react";

/**
 * Facility — SlideStructure STR-FACILITY. A 3-column facility-tour gallery; each
 * column is a stack of items (Floorplan / PhotoPanel / labelled panels). Render
 * inside a <SlideFrame variant="content">.
 */
export function Facility({ columns = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: `repeat(${columns.length || 1}, 1fr)`, gap: "var(--col-gap)", height: "100%", alignItems: "start", ...style }}>
      {columns.map((col, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {col.map((item, j) => <div key={j}>{item}</div>)}
        </div>
      ))}
    </div>
  );
}
