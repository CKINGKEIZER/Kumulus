import React from "react";

/**
 * Pyramid — layered segmentation pyramid (market tiers, customer segments).
 * Tiers narrow to the top and tint from deep (top) to light (base) across the
 * deal primary. Each tier shows a label and optional value.
 */
export function Pyramid({
  tiers = [],              // top-to-bottom [{ label, value? }]
  height = 220,
  className = "",
  style = {},
}) {
  const n = tiers.length || 1;
  const shades = (i) => `color-mix(in srgb, var(--deal-primary) ${100 - (i * 55 / n)}%, #fff)`;
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height, justifyContent: "center", fontFamily: "var(--font-sans)", ...style }}>
      {tiers.map((t, i) => {
        const w = 34 + (i + 1) * (66 / n); // widen toward base
        return (
          <div key={i} style={{ width: w + "%", background: shades(i), color: "#fff", textAlign: "center", padding: "8px 10px", borderRadius: 2, display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <span style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)" }}>{t.label}</span>
            {t.value != null ? <span style={{ fontSize: "var(--fs-label)", opacity: 0.9 }}>{t.value}</span> : null}
          </div>
        );
      })}
    </div>
  );
}
