import React from "react";
/** Gauge — a semicircle gauge for a bounded score (NPS, satisfaction). Arc fills
 * to the value; a pill readout + caption beneath. */
export function Gauge({ value = 0, min = 0, max = 100, readout = null, caption = null, size = 200, className = "", style = {} }) {
  const R = size / 2 - 10, cx = size / 2, cy = size / 2;
  const frac = Math.max(0, Math.min(1, (value - min) / (max - min || 1)));
  const a = Math.PI * (1 - frac);
  const ex = cx + R * Math.cos(a), ey = cy - R * Math.sin(a);
  const arc = (x1, y1, x2, y2, large) => `M ${x1} ${y1} A ${R} ${R} 0 ${large} 1 ${x2} ${y2}`;
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, fontFamily: "var(--font-sans)", ...style }}>
      <svg viewBox={`0 0 ${size} ${size / 2 + 16}`} style={{ width: size }}>
        <path d={arc(cx - R, cy, cx + R, cy, 0)} fill="none" stroke="var(--surface-band)" strokeWidth="12" />
        <path d={arc(cx - R, cy, ex, ey, frac > 0.5 ? 0 : 0)} fill="none" stroke="var(--deal-accent)" strokeWidth="12" strokeLinecap="round" />
      </svg>
      {readout != null ? <div style={{ background: "var(--deal-primary)", color: "#fff", borderRadius: "999px", padding: "2px 12px", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)" }}>{readout}</div> : null}
      {caption ? <div style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-muted)" }}>{caption}</div> : null}
    </div>
  );
}
