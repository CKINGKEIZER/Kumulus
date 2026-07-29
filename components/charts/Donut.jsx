import React from "react";

/**
 * Donut — segmented ring with an optional centre label and side legend. The
 * house share/split chart (revenue mix, segmentation, tenure). Segment colours
 * default to the deal chart ramp. Pure SVG.
 */
export function Donut({
  segments = [],            // [{ value, label?, color? }]
  size = 150,
  thickness = 26,
  centerLabel = null,
  centerSub = null,
  legend = false,
  gap = 2,                  // degrees between segments
  className = "",
  style = {},
}) {
  const ramp = ["var(--deal-chart-1)", "var(--deal-chart-2)", "var(--deal-chart-3)", "var(--deal-chart-4)", "var(--deal-chart-5)"];
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = 50 - thickness / 2 / (size / 100);
  const R = 50, cx = 50, cy = 50;
  let angle = -90;
  const arcs = segments.map((s, i) => {
    const sweep = (s.value / total) * 360 - gap;
    const a0 = (angle + gap / 2) * Math.PI / 180;
    const a1 = (angle + gap / 2 + sweep) * Math.PI / 180;
    angle += (s.value / total) * 360;
    const rr = R - thickness / 2;
    const x0 = cx + rr * Math.cos(a0), y0 = cy + rr * Math.sin(a0);
    const x1 = cx + rr * Math.cos(a1), y1 = cy + rr * Math.sin(a1);
    const large = sweep > 180 ? 1 : 0;
    return <path key={i} d={`M ${x0} ${y0} A ${rr} ${rr} 0 ${large} 1 ${x1} ${y1}`} fill="none" stroke={s.color || ramp[i % ramp.length]} strokeWidth={thickness} />;
  });
  return (
    <div className={className} style={{ display: "flex", alignItems: "center", gap: 16, ...style }}>
      <div style={{ position: "relative", width: size, height: size, flex: "0 0 auto" }}>
        <svg width={size} height={size} viewBox="0 0 100 100">{arcs}</svg>
        {centerLabel != null ? (
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: size * 0.15, color: "var(--text-heading)", lineHeight: 1 }}>{centerLabel}</div>
            {centerSub ? <div style={{ fontSize: size * 0.075, letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--text-muted)" }}>{centerSub}</div> : null}
          </div>
        ) : null}
      </div>
      {legend ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 5, fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)" }}>
          {segments.map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 11, height: 11, borderRadius: 2, background: s.color || ramp[i % ramp.length], flex: "0 0 auto" }} />
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
