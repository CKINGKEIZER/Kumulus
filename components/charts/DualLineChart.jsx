import React from "react";
/** DualLineChart — two comparative lines (e.g. gross vs EBITDA margin) across a
 * period axis, each data point a boxed % value. */
export function DualLineChart({ series = [], categories = [], height = 220, className = "", style = {} }) {
  const W = 420, pad = 24;
  const all = series.flatMap((s) => s.values);
  const max = Math.max(1, ...all), min = Math.min(0, ...all);
  const sx = (i) => pad + (i / Math.max(1, categories.length - 1)) * (W - 2 * pad);
  const sy = (v) => (height - pad) - ((v - min) / (max - min || 1)) * (height - 2 * pad);
  const colors = ["var(--deal-primary)", "var(--deal-secondary)"];
  return (
    <div className={className} style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", ...style }}>
      <svg viewBox={`0 0 ${W} ${height}`} style={{ width: "100%", height }}>
        {series.map((s, si) => (
          <g key={si}>
            <polyline fill="none" stroke={colors[si % colors.length]} strokeWidth="2" points={s.values.map((v, i) => `${sx(i)},${sy(v)}`).join(" ")} />
            {s.values.map((v, i) => (
              <g key={i}>
                <rect x={sx(i) - 12} y={sy(v) - 8} width="24" height="16" rx="2" fill="#fff" stroke={colors[si % colors.length]} />
                <text x={sx(i)} y={sy(v) + 4} textAnchor="middle" fontSize="9" fill="var(--text-body)">{v}</text>
              </g>
            ))}
          </g>
        ))}
        {categories.map((c, i) => <text key={i} x={sx(i)} y={height - 4} textAnchor="middle" fontSize="9" fill="var(--text-muted)">{c}</text>)}
      </svg>
    </div>
  );
}
