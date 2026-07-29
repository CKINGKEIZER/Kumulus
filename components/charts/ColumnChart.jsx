import React from "react";

/**
 * ColumnChart — the workhorse IM bar/column chart. Stacked or grouped columns
 * with series colours from the deal chart ramp (--deal-chart-1..5), value
 * labels inside segments, a total above each column, and a category axis.
 * Left-side category labels (as on the revenue-mix slide) can be supplied via
 * `seriesLabels`. Pair with <CagrPill>, <MarginCapsule> and <ColumnHeading>
 * for the full slide construction. Pure CSS/flex — no chart library.
 */
export function ColumnChart({
  data = [],                 // [{ label, segments:[{value,label?}] }]  or [{label,value}]
  mode = "stacked",          // "stacked" | "grouped" | "simple"
  height = 260,
  colors = null,             // override series colours
  seriesLabels = null,       // left-axis category names (stacked)
  showTotals = true,
  formatTotal = (n) => n.toFixed(1),
  barWidth = 90,
  gap = 44,
  className = "",
  style = {},
}) {
  const ramp = colors || ["var(--deal-chart-1)", "var(--deal-chart-2)", "var(--deal-chart-3)", "var(--deal-chart-4)", "var(--deal-chart-5)"];
  const norm = data.map((d) => d.segments ? d : { ...d, segments: [{ value: d.value }] });
  const totals = norm.map((d) => d.segments.reduce((s, x) => s + x.value, 0));
  const max = Math.max(...totals, 1);
  const plot = height - 30; // leave room for total + axis label

  return (
    <div className={className} style={{ display: "flex", gap: 14, fontFamily: "var(--font-sans)", ...style }}>
      {seriesLabels ? (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 2, paddingBottom: 26, textAlign: "right" }}>
          {seriesLabels.map((s, i) => (
            <div key={i} style={{ fontSize: "var(--fs-label)", color: "var(--text-body)", lineHeight: 1.3 }}>{s}</div>
          ))}
        </div>
      ) : null}
      <div style={{ display: "flex", alignItems: "flex-end", gap, flex: "1 1 auto", justifyContent: "space-around" }}>
        {norm.map((d, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: barWidth }}>
            {showTotals ? (
              <div style={{ fontWeight: "var(--fw-bold)", fontSize: 15, color: "var(--text-heading)", marginBottom: 5 }}>{formatTotal(totals[i])}</div>
            ) : null}
            <div style={{ width: "100%", height: (totals[i] / max) * plot, display: "flex", flexDirection: mode === "grouped" ? "row" : "column", alignItems: "flex-end", gap: mode === "grouped" ? 3 : 0, borderRadius: "2px", overflow: "hidden" }}>
              {mode === "grouped"
                ? d.segments.map((seg, j) => {
                    const h = (seg.value / (totals[i] || 1)) * 100;
                    return (
                      <div key={j} title={String(seg.value)} style={{ flex: 1, height: h + "%", minHeight: 2, background: ramp[j % ramp.length], borderRadius: "2px 2px 0 0" }} />
                    );
                  })
                : d.segments.map((seg, j) => {
                    const h = (seg.value / totals[i]) * 100;
                    return (
                      <div key={j} style={{ height: h + "%", background: ramp[j % ramp.length], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: "var(--fw-semibold)" }}>
                        {seg.label != null ? seg.label : (h > 12 ? seg.value : "")}
                      </div>
                    );
                  })}
            </div>
            <div style={{ marginTop: 8, fontWeight: "var(--fw-bold)", fontSize: "var(--fs-label)", letterSpacing: "0.04em", color: "var(--text-heading)" }}>{d.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
