import React from "react";
/** GeoMap — geographic footprint as a priority flag-list: country rows (flag +
 * name + value) ranked by a High->Low colour ramp. (A schematic stand-in for a
 * choropleth; swap in a real map asset when available.) */
export function GeoMap({ rows = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-sans)", ...style }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--surface-band)", borderRadius: 3, padding: "6px 10px" }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: r.color || "var(--deal-primary)" }} />
          <span style={{ flex: "0 0 auto", fontSize: "var(--fs-body-sm)" }}>{r.flag}</span>
          <span style={{ flex: "1 1 auto", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-bold)" }}>{r.name}</span>
          <span style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-body)", fontVariantNumeric: "tabular-nums" }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}
