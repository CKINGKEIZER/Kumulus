import React from "react";
/** Venn — 2-3 overlapping translucent circles, each a caps label; the overlap
 * (cross-sell / combined capability) is the message. */
export function Venn({ circles = [], overlapLabel = null, size = 320, className = "", style = {} }) {
  const r = size * 0.3;
  const positions = circles.length === 2
    ? [{ cx: size * 0.38, cy: size * 0.5 }, { cx: size * 0.62, cy: size * 0.5 }]
    : [{ cx: size * 0.5, cy: size * 0.36 }, { cx: size * 0.36, cy: size * 0.62 }, { cx: size * 0.64, cy: size * 0.62 }];
  return (
    <div className={className} style={{ position: "relative", width: size, height: size, margin: "0 auto", fontFamily: "var(--font-sans)", ...style }}>
      <svg viewBox={`0 0 ${size} ${size}`} style={{ width: size, height: size }}>
        {circles.map((c, i) => <circle key={i} cx={positions[i].cx} cy={positions[i].cy} r={r} fill="var(--deal-accent)" opacity="0.25" stroke="var(--deal-primary)" />)}
      </svg>
      {circles.map((c, i) => (
        <div key={i} style={{ position: "absolute", left: positions[i].cx, top: positions[i].cy, transform: "translate(-50%,-50%)", textAlign: "center", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-bold)", width: r }}>{c}</div>
      ))}
      {overlapLabel ? <div style={{ position: "absolute", left: "50%", top: "52%", transform: "translate(-50%,-50%)", textAlign: "center", fontSize: "var(--fs-body-sm)", color: "var(--deal-primary)", fontWeight: "var(--fw-bold)" }}>{overlapLabel}</div> : null}
    </div>
  );
}
