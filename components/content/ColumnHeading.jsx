import React from "react";

/**
 * ColumnHeading — small-caps heading used at the top of each body column /
 * sub-section. House rule: title underlines are BLACK 0.5pt lines (all other
 * separators are 0.25pt grey) — `rule="title"` (default) vs `rule="separator"`
 * vs `rule={false}`.
 */
export function ColumnHeading({
  children,
  icon = null,
  rule = true,
  align = "center",
  className = "",
  style = {},
}) {
  return (
    <div className={className} style={{ ...style }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: align === "center" ? "center" : "flex-start",
          gap: "6px",
          paddingBottom: rule ? "5px" : 0,
        }}
      >
        {icon ? (
          <span style={{ display: "inline-flex", color: "var(--brand-secondary)" }}>{icon}</span>
        ) : null}
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: "var(--fw-bold)",
            fontSize: "var(--fs-colhead)",
            letterSpacing: "var(--ls-caps)",
            textTransform: "uppercase",
            color: "var(--text-heading)",
          }}
        >
          {children}
        </span>
      </div>
      {rule ? <div style={{ borderTop: rule === "separator" ? "var(--rule-separator)" : "var(--rule-title)" }} /> : null}
    </div>
  );
}
