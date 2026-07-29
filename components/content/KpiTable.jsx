import React from "react";

/**
 * KpiTable — a compact two-(or-more)-column reference table with a
 * small-caps header row and hairline-ruled rows (e.g. KPI | DESCRIPTION).
 */
export function KpiTable({ columns, rows, className = "", style = {} }) {
  return (
    <div className={className} style={{ width: "100%", ...style }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: columns.map((c) => c.width || "1fr").join(" "),
          columnGap: "16px",
          padding: "0 0 5px",
          borderBottom: "var(--border-rule-strong)",
        }}
      >
        {columns.map((c, i) => (
          <div
            key={i}
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: "var(--fw-bold)",
              fontSize: "var(--fs-label)",
              letterSpacing: "var(--ls-caps)",
              textTransform: "uppercase",
              color: "var(--text-heading)",
              textAlign: c.align || "left",
            }}
          >
            {c.label}
          </div>
        ))}
      </div>
      {rows.map((row, r) => (
        <div
          key={r}
          style={{
            display: "grid",
            gridTemplateColumns: columns.map((c) => c.width || "1fr").join(" "),
            columnGap: "16px",
            padding: "7px 0",
            borderBottom: "var(--border-hair)",
          }}
        >
          {row.map((cell, c) => (
            <div
              key={c}
              style={{
                fontSize: "var(--fs-body-sm)",
                lineHeight: "var(--lh-snug)",
                color: c === 0 ? "var(--text-heading)" : "var(--text-body)",
                fontWeight: c === 0 ? "var(--fw-semibold)" : "var(--fw-regular)",
                textAlign: columns[c]?.align || "left",
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
