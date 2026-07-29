import React from "react";
/** DeltaBars — a compact two-column before/after chart with a change pill
 * between (e.g. 5.6% -> 8.1%, "+2.5pp"). */
export function DeltaBars({ start, end, delta = null, height = 160, className = "", style = {} }) {
  const max = Math.max(Number(start.value) || 1, Number(end.value) || 1);
  const bh = (v) => Math.max(4, ((Number(v) || 0) / max) * (height - 40));
  const Bar = ({ d }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end" }}>
      <div style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)", marginBottom: 3 }}>{d.display != null ? d.display : d.value}</div>
      <div style={{ width: 56, height: bh(d.value), background: "var(--deal-primary)", borderRadius: 1 }} />
      <div style={{ fontSize: "var(--fs-body-sm)", marginTop: 4 }}>{d.label}</div>
    </div>
  );
  return (
    <div className={className} style={{ display: "flex", alignItems: "flex-end", gap: 20, height, ...style }}>
      <Bar d={start} />
      {delta ? <div style={{ alignSelf: "center", background: "var(--surface-band)", borderRadius: "999px", padding: "3px 10px", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-bold)", color: "var(--deal-primary)" }}>{"→ "}{delta}</div> : null}
      <Bar d={end} />
    </div>
  );
}
