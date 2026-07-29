import React from "react";

/**
 * NumberedHighlight — one row of the IM "Key investment highlights" layout:
 * a deal-primary panel (number circle + icon + small-caps title) on the left,
 * a bulleted claim card in the middle, and a visual card (chart/logos/donut)
 * on the right. Compose several in a column for the full slide.
 */
export function NumberedHighlight({
  number,
  title,
  icon = null,
  bullets = [],
  visual = null,
  className = "",
  style = {},
}) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: "1.05fr 2fr 1.4fr", gap: 12, alignItems: "stretch", fontFamily: "var(--font-sans)", ...style }}>
      <div style={{ position: "relative", background: "var(--deal-primary)", color: "#fff", borderRadius: 4, padding: "16px 16px 14px" }}>
        <span style={{ position: "absolute", top: 10, left: 10, width: 22, height: 22, borderRadius: "999px", border: "1.5px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: "var(--fw-bold)" }}>{number}</span>
        {icon ? <div style={{ marginTop: 24, marginBottom: 8 }}>{icon}</div> : <div style={{ marginTop: 24 }} />}
        <div style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-colhead)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", lineHeight: 1.3 }}>{title}</div>
      </div>
      <div style={{ border: "var(--border-hair)", borderRadius: 4, padding: "12px 14px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 8 }}>
        {bullets.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "baseline", fontSize: "var(--fs-body)", lineHeight: "var(--lh-body)", color: "var(--text-body)" }}>
            <span style={{ color: "var(--deal-primary)", fontSize: "0.8em", flex: "0 0 auto" }}>▷</span><span>{b}</span>
          </div>
        ))}
      </div>
      <div style={{ border: "var(--border-hair)", borderRadius: 4, padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>{visual}</div>
    </div>
  );
}
