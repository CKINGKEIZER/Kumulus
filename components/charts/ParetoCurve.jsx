import React from "react";

/**
 * ParetoCurve — cumulative concentration curve (customer / revenue). An
 * area-filled cumulative line rising left→right with axes and an optional
 * highlighted window (e.g. "top 20% of customers = 60% of revenue").
 * `points` are {x,y} in 0..100, sorted by x.
 */
export function ParetoCurve({ points = [], height = 280, highlight = null, className = "", style = {} }) {
  const W = 460, H = height, pad = 30;
  const sx = (x) => pad + (x / 100) * (W - 2 * pad);
  const sy = (y) => H - pad - (y / 100) * (H - 2 * pad);
  const path = points.map((p, i) => `${i ? "L" : "M"}${sx(p.x)},${sy(p.y)}`).join(" ");
  const area = `${path} L${sx(100)},${sy(0)} L${sx(0)},${sy(0)} Z`;
  return (
    <div className={className} style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)", ...style }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height }}>
        {highlight ? <rect x={sx(highlight.from)} y={pad} width={sx(highlight.to) - sx(highlight.from)} height={H - 2 * pad} fill="var(--deal-accent)" opacity="0.18" /> : null}
        <path d={area} fill="var(--deal-accent)" opacity="0.22" />
        <path d={path} fill="none" stroke="var(--deal-primary)" strokeWidth="2" />
        <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="var(--text-muted)" strokeWidth="1" />
        <line x1={pad} y1={pad} x2={pad} y2={H - pad} stroke="var(--text-muted)" strokeWidth="1" />
      </svg>
    </div>
  );
}
