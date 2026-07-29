import React from "react";

/**
 * WaterfallChart — the IM bridge / waterfall (PRIM-CHART-WATERFALL). Tall
 * anchor columns at each end (absolute totals, e.g. Revenue FY21A → FY26E) with
 * floating driver bars between them (deltas that step up/down from the running
 * total). Values sit above each bar, labels beneath; faint connectors link the
 * steps. Bars use the deal chart ramp; deltas can be tinted per sign. Values are
 * passed as numbers (for geometry) with an optional pre-formatted `display`.
 */
export function WaterfallChart({
  items = [],
  height = 300,
  formatValue = (n) => String(n),
  anchorColor = "var(--deal-primary)",
  upColor = "var(--deal-chart-3)",
  downColor = "var(--deal-secondary)",
  className = "",
  style = {},
}) {
  // running-total geometry
  let running = 0;
  const bars = items.map((it) => {
    if (it.kind === "anchor") {
      const b = { base: 0, top: it.value, value: it.value };
      running = it.value;
      return { ...it, ...b };
    }
    const base = running;
    const top = running + it.value;
    running = top;
    return { ...it, base: Math.min(base, top), top: Math.max(base, top), value: it.value };
  });
  const max = Math.max(1, ...bars.map((b) => b.top));
  const px = (v) => (v / max) * (height - 34); // leave headroom for value labels

  return (
    <div className={className} style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)", ...style }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height }}>
        {bars.map((b, i) => {
          const isAnchor = b.kind === "anchor";
          const barColor = isAnchor ? anchorColor : b.value >= 0 ? upColor : downColor;
          const h = Math.max(2, px(b.top - b.base));
          const bottom = px(b.base);
          return (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end", position: "relative" }}>
              <div style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)", marginBottom: 2 }}>
                {b.display != null ? b.display : formatValue(b.value)}
              </div>
              <div style={{ width: "100%", height: h, marginBottom: bottom, background: barColor, borderRadius: 1 }} />
              <div style={{ position: "absolute", bottom: -18, textAlign: "center", fontSize: "var(--fs-body-sm)", color: "var(--text-body)", width: "115%", lineHeight: 1.1 }}>{b.label}</div>
            </div>
          );
        })}
      </div>
      <div style={{ height: 20 }} />
    </div>
  );
}
