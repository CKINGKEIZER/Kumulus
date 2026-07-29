import React from "react";

/**
 * FinancialTable — the IM financial-statement / KPI table (P&L, balance sheet,
 * cash flow, QoE). House execution: deal-primary filled header cells (white
 * bold), left row labels, right-aligned period columns, bold subtotal rows on
 * a light grey band, parenthesised negatives, indented italic sub-rows,
 * optional numbered markers linking to a commentary rail, and an italic KPI
 * block beneath a rule. Numbers are passed pre-formatted (strings) so the deal
 * team controls rounding and the "(1.2)" negative convention.
 */
export function FinancialTable({
  columns = [],
  rows = [],
  kpis = null,
  rowLabelHead = "€m",
  note = null,
  markerColor = "var(--deal-header-fill)",
  className = "",
  style = {},
}) {
  const cell = { padding: "5px 10px", textAlign: "right", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" };
  const Marker = ({ n }) => (
    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 15, height: 15, borderRadius: "999px", background: markerColor, color: "var(--deal-header-text)", fontSize: 9, fontWeight: "var(--fw-bold)", marginLeft: 6, verticalAlign: "middle" }}>{n}</span>
  );
  return (
    <div className={className} style={{ fontFamily: "var(--font-sans)", fontSize: "var(--fs-body-sm)", color: "var(--text-body)", ...style }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ ...cell, textAlign: "left", fontWeight: "var(--fw-regular)", color: "var(--text-muted)" }}>{rowLabelHead}</th>
            {columns.map((c, i) => (
              <th key={i} style={{ ...cell, background: "var(--deal-header-fill)", color: "var(--deal-header-text)", fontWeight: "var(--fw-bold)", borderLeft: "2px solid #fff" }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const rowStyle = {
              background: r.subtotal ? "var(--surface-band)" : "transparent",
              fontWeight: r.bold || r.subtotal ? "var(--fw-bold)" : "var(--fw-regular)",
              fontStyle: r.italic ? "italic" : "normal",
            };
            return (
              <tr key={i} style={rowStyle}>
                <td style={{ ...cell, textAlign: "left", paddingLeft: r.indent ? 24 : 10 }}>
                  {r.label}{r.marker != null ? <Marker n={r.marker} /> : null}
                </td>
                {r.values.map((v, j) => (
                  <td key={j} style={cell}>{v}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {kpis ? (
        <div style={{ marginTop: 10, borderTop: "var(--rule-title)", paddingTop: 6 }}>
          <div style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", marginBottom: 4 }}>KPIs</div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
              {kpis.map((k, i) => (
                <tr key={i} style={{ fontStyle: "italic" }}>
                  <td style={{ ...cell, textAlign: "left" }}>{k.label}</td>
                  {k.values.map((v, j) => <td key={j} style={cell}>{v}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      {note ? <div style={{ marginTop: 8, fontSize: "var(--fs-footnote)", color: "var(--text-footnote)" }}>{note}</div> : null}
    </div>
  );
}
