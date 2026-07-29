import React from "react";

/**
 * ValueCapsule — the pale-blue rounded pill that wraps a data value beside
 * chart rows and KPIs. Navy figure on sky-200.
 */
export function ValueCapsule({ children, tone = "sky", className = "", style = {} }) {
  const bg = tone === "navy" ? "var(--navy-800)" : "var(--capsule-bg)";
  const fg = tone === "navy" ? "var(--white)" : "var(--capsule-text)";
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
        color: fg,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-bold)",
        fontSize: "var(--fs-body-sm)",
        lineHeight: 1,
        padding: "3px 8px",
        borderRadius: "var(--radius-sm)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
