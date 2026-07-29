import React from "react";

/**
 * KpiTileGrid — the solid deal-primary KPI tile band (3×N). Each tile: a bold
 * white figure over a small-caps label (+ optional sub). The company-snapshot
 * headline metrics. Box never grows; text fits the tile.
 */
export function KpiTileGrid({ tiles = [], columns = 3, className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 6, ...style }}>
      {tiles.map((t, i) => (
        <div key={i} style={{ background: "var(--deal-primary)", color: "#fff", padding: "8px 10px", borderRadius: 2, textAlign: "center" }}>
          <div style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-kpi)", lineHeight: 1.1 }}>{t.value}</div>
          <div style={{ fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", fontWeight: "var(--fw-bold)", opacity: 0.92, marginTop: 2 }}>
            {t.label}
            {t.sub ? <div style={{ fontWeight: "var(--fw-regular)", opacity: 0.85, letterSpacing: 0 }}>{t.sub}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
