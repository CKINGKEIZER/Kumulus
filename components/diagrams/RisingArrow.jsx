import React from "react";
/** RisingArrow — an upward growth trajectory: a tilted rising arrow with stage
 * labels along it (today -> future build-up). */
export function RisingArrow({ stages = [], height = 260, className = "", style = {} }) {
  const n = stages.length || 1;
  return (
    <div className={className} style={{ position: "relative", width: "100%", height, fontFamily: "var(--font-sans)", ...style }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <line x1="4" y1="92" x2="96" y2="10" stroke="var(--deal-primary)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
        <polygon points="96,10 90,12 93,17" fill="var(--deal-primary)" />
      </svg>
      {stages.map((s, i) => {
        const t = n === 1 ? 0.5 : i / (n - 1);
        return (
          <div key={i} style={{ position: "absolute", left: `${4 + t * 88}%`, top: `${92 - t * 82}%`, transform: "translate(-50%,-120%)", textAlign: "center", width: 150 }}>
            <div style={{ background: "var(--deal-primary)", color: "#fff", borderRadius: 3, padding: "4px 8px", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-bold)" }}>{s.label}</div>
            {s.sub ? <div style={{ fontSize: "var(--fs-footnote)", color: "var(--text-muted)", marginTop: 2 }}>{s.sub}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
