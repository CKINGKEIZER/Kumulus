import React from "react";
/** AcqTargetScan — the M&A buy-side target scan table: a grey small-caps header
 * band + rows of flag / numbered badge / financials / description / rationale
 * bullets / fit-coverage ticks. */
export function AcqTargetScan({ columns = [], rows = [], className = "", style = {} }) {
  const cell = { padding: "6px 8px", fontSize: "var(--fs-body-sm)", verticalAlign: "top", borderTop: "var(--rule-separator)" };
  const Tick = ({ v }) => <span style={{ color: v ? "var(--deal-primary)" : "var(--text-muted)" }}>{v ? "✓" : "✗"}</span>;
  return (
    <table className={className} style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-sans)", ...style }}>
      <thead>
        <tr style={{ background: "var(--surface-band)" }}>
          {columns.map((c, i) => <th key={i} style={{ ...cell, textAlign: "left", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--text-heading)", borderTop: "none" }}>{c}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            {r.cells.map((v, j) => (
              <td key={j} style={cell}>{typeof v === "boolean" ? <Tick v={v} /> : Array.isArray(v) ? <ul style={{ margin: 0, paddingLeft: 14 }}>{v.map((b, k) => <li key={k}>{b}</li>)}</ul> : v}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
