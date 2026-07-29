import React from "react";

/**
 * CycleRing — a repeating growth motion (flywheel / cycle). N stage cards
 * arranged clockwise around a dashed ring, with an optional centre label. Order
 * loops back to the start — a cycle, not a one-way sequence.
 */
export function CycleRing({ stages = [], centerLabel = null, size = 380, className = "", style = {} }) {
  const n = stages.length || 1;
  const R = size / 2 - 46;
  return (
    <div className={className} style={{ position: "relative", width: size, height: size, margin: "0 auto", ...style }}>
      <div style={{ position: "absolute", inset: 46, border: "2px dashed var(--deal-accent)", borderRadius: "999px" }} />
      {centerLabel ? <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", textAlign: "center", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)", color: "var(--deal-primary)", width: size * 0.4 }}>{centerLabel}</div> : null}
      {stages.map((s, i) => {
        const a = (2 * Math.PI * i) / n - Math.PI / 2;
        const x = size / 2 + R * Math.cos(a);
        const y = size / 2 + R * Math.sin(a);
        return (
          <div key={i} style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", background: "var(--deal-primary)", color: "#fff", borderRadius: 3, padding: "6px 10px", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-bold)", textAlign: "center", width: 130 }}>
            <span style={{ display: "block", fontSize: 10, opacity: 0.8 }}>{i + 1}</span>{s}
          </div>
        );
      })}
    </div>
  );
}
