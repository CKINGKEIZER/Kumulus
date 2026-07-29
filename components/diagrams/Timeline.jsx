import React from "react";

/**
 * Timeline — the IM company-history timeline: a deal-ramp phase-chevron header
 * bar across the top, then a horizontal line with circular year nodes and
 * events alternating above/below. Phases tint from light to deep across the
 * deal primary. Pure CSS/flex + one SVG line.
 */
export function Timeline({
  phases = [],              // [{ label, flex? }]
  events = [],             // [{ year, text, side?: "top"|"bottom" }]
  className = "",
  style = {},
}) {
  const shades = ["color-mix(in srgb, var(--deal-primary) 45%, #fff)", "color-mix(in srgb, var(--deal-primary) 70%, #fff)", "var(--deal-primary)", "var(--deal-primary-deep)"];
  const tops = events.filter((e, i) => (e.side || (i % 2 ? "bottom" : "top")) === "top");
  const bots = events.filter((e, i) => (e.side || (i % 2 ? "bottom" : "top")) === "bottom");
  const Node = ({ e }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, minWidth: 0 }}>
      <span style={{ width: 34, height: 34, borderRadius: "999px", background: "var(--deal-primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: 12, flex: "0 0 auto" }}>{e.year}</span>
    </div>
  );
  const Cap = ({ e }) => (
    <div style={{ flex: 1, minWidth: 0, fontSize: "var(--fs-body-sm)", lineHeight: 1.35, color: "var(--text-body)", textAlign: "center", padding: "0 6px" }}>{e.text}</div>
  );
  return (
    <div className={className} style={{ fontFamily: "var(--font-sans)", ...style }}>
      {/* phase chevron header */}
      <div style={{ display: "flex", gap: 6, marginBottom: 22 }}>
        {phases.map((p, i) => (
          <div key={i} style={{ flex: p.flex || 1, background: shades[Math.min(i, shades.length - 1)], color: "#fff", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", textAlign: "center", padding: "6px 10px", clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)" }}>{p.label}</div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "flex-end" }}>{tops.map((e, i) => <Cap key={i} e={e} />)}</div>
      <div style={{ display: "flex", alignItems: "center", margin: "8px 0", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 4, background: "var(--gray-300)", borderRadius: 2 }} />
        {events.map((e, i) => <Node key={i} e={e} />)}
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>{bots.map((e, i) => <Cap key={i} e={e} />)}</div>
    </div>
  );
}
