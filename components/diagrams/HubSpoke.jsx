import React from "react";

/**
 * HubSpoke — a central node (diamond/circle) with spoke items placed radially
 * around it (investment-highlight hub, converging-drivers hub). The centre
 * carries the thesis; spokes are the supporting points.
 */
export function HubSpoke({ hub, spokes = [], shape = "diamond", radius = 210, className = "", style = {} }) {
  const n = spokes.length || 1;
  return (
    <div className={className} style={{ position: "relative", width: "100%", height: 2 * radius + 120, ...style }}>
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
        <div style={{ width: 132, height: 132, background: "var(--deal-accent)", color: "var(--deal-primary-deep)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 10, fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)", transform: shape === "diamond" ? "rotate(45deg)" : "none", borderRadius: shape === "circle" ? "999px" : 6 }}>
          <span style={{ transform: shape === "diamond" ? "rotate(-45deg)" : "none" }}>{hub}</span>
        </div>
      </div>
      {spokes.map((s, i) => {
        const a = (2 * Math.PI * i) / n - Math.PI / 2;
        const x = 50 + (radius / (2 * radius + 120)) * 100 * Math.cos(a);
        const y = 50 + 50 * Math.sin(a);
        return (
          <div key={i} style={{ position: "absolute", left: `${x}%`, top: `${y}%`, transform: "translate(-50%,-50%)", width: 160, textAlign: "center", fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 18, height: 18, borderRadius: "999px", background: "var(--deal-primary)", color: "#fff", fontWeight: "var(--fw-bold)", fontSize: 10, marginBottom: 3 }}>{i + 1}</span>
            <div>{s}</div>
          </div>
        );
      })}
    </div>
  );
}
