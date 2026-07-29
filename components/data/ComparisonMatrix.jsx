import React from "react";

/**
 * HarveyBall — 0–4 fill rating glyph (empty, quarter, half, three-quarter,
 * full) in the deal primary colour. The house rating mark used across
 * capability / competitive matrices.
 */
export function HarveyBall({ level = 0, size = 15, color = "var(--deal-primary)", style = {} }) {
  const r = size / 2;
  const clip = {
    0: null,
    1: `polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)`,
    2: `polygon(50% 0, 100% 0, 100% 100%, 50% 100%)`,
    3: `polygon(50% 0, 100% 0, 100% 100%, 0 100%, 0 50%)`,
    4: `none`,
  }[Math.max(0, Math.min(4, level))];
  return (
    <span style={{ position: "relative", display: "inline-block", width: size, height: size, borderRadius: "999px", border: `1.4px solid ${color}`, verticalAlign: "middle", ...style }}>
      {clip ? <span style={{ position: "absolute", inset: 0, borderRadius: "999px", background: color, clipPath: clip === "none" ? undefined : clip }} /> : null}
    </span>
  );
}

/**
 * ComparisonMatrix — capability / competitive / field-description-impact table.
 * Columns across, rows down; each cell is either a 0–4 number (rendered as a
 * HarveyBall), a boolean (check/dash), or a ReactNode (text). Optional left
 * vertical deal-primary tab label, and an optional first "description" column.
 */
export function ComparisonMatrix({
  columns = [],
  rows = [],
  tabLabel = null,
  firstColHead = "",
  className = "",
  style = {},
}) {
  const cell = { padding: "8px 12px", textAlign: "center", borderBottom: "var(--rule-separator)", fontSize: "var(--fs-body-sm)" };
  const renderCell = (v) => {
    if (typeof v === "number") return <HarveyBall level={v} />;
    if (v === true) return <span style={{ color: "var(--deal-positive)", fontWeight: "var(--fw-bold)" }}>✓</span>;
    if (v === false) return <span style={{ color: "var(--gray-400)" }}>–</span>;
    return v;
  };
  const table = (
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", color: "var(--text-body)" }}>
      <thead>
        <tr>
          <th style={{ ...cell, textAlign: "left", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--text-label)", borderBottom: "var(--rule-title)" }}>{firstColHead}</th>
          {columns.map((c, i) => (
            <th key={i} style={{ ...cell, fontWeight: "var(--fw-bold)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--text-label)", borderBottom: "var(--rule-title)" }}>{c.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td style={{ ...cell, textAlign: "left", fontWeight: "var(--fw-semibold)" }}>{r.label}</td>
            {r.cells.map((v, j) => <td key={j} style={cell}>{renderCell(v)}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
  if (!tabLabel) return <div className={className} style={style}>{table}</div>;
  return (
    <div className={className} style={{ display: "flex", gap: 0, ...style }}>
      <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", background: "var(--deal-primary)", color: "#fff", padding: "10px 6px", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", textAlign: "center", borderRadius: "3px 0 0 3px" }}>{tabLabel}</div>
      <div style={{ flex: "1 1 auto" }}>{table}</div>
    </div>
  );
}
