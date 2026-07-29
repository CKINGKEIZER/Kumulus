import React from "react";

/**
 * Matrix2x2 — a positioning map: two labelled axes forming four quadrants, with
 * items plotted by (x,y) in 0..1. Our company is passed with highlight:true.
 * The competitive-landscape / prioritisation device.
 */
export function Matrix2x2({ xAxis = {}, yAxis = {}, items = [], size = 440, className = "", style = {} }) {
  return (
    <div className={className} style={{ position: "relative", width: size, height: size, margin: "0 auto", ...style }}>
      <div style={{ position: "absolute", inset: "20px 8px 26px 30px", border: "var(--rule-separator)" }}>
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, borderLeft: "var(--rule-separator)" }} />
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, borderTop: "var(--rule-separator)" }} />
        {items.map((it, i) => (
          <div key={i} style={{ position: "absolute", left: `${it.x * 100}%`, top: `${(1 - it.y) * 100}%`, transform: "translate(-50%,-50%)", fontSize: "var(--fs-body-sm)", fontWeight: it.highlight ? "var(--fw-bold)" : "var(--fw-regular)", color: it.highlight ? "#fff" : "var(--text-body)", background: it.highlight ? "var(--deal-primary)" : "#fff", padding: "1px 5px", border: it.highlight ? "none" : "var(--rule-separator)", borderRadius: 3, whiteSpace: "nowrap" }}>{it.label}</div>
        ))}
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 4, textAlign: "center", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", fontWeight: "var(--fw-bold)", color: "var(--text-heading)" }}>{xAxis.label}</div>
      <div style={{ position: "absolute", left: 4, top: "50%", transform: "translateY(-50%) rotate(-90deg)", transformOrigin: "center", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", fontWeight: "var(--fw-bold)", color: "var(--text-heading)", whiteSpace: "nowrap" }}>{yAxis.label}</div>
    </div>
  );
}
