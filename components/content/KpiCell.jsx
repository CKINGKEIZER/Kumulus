import React from "react";

/**
 * KpiCell — a single headline metric: optional icon, big navy figure, and
 * a small-caps label (with optional second line). Used in KPI strips and
 * case-study fact boxes.
 */
export function KpiCell({
  value,
  label,
  sublabel = null,
  icon = null,
  align = "center",
  size = "md",
  className = "",
  style = {},
}) {
  const fs = size === "lg" ? "var(--fs-kpi-lg)" : "var(--fs-kpi)";
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align,
        gap: "3px",
        ...style,
      }}
    >
      {icon ? (
        <span style={{ display: "inline-flex", color: "var(--brand-secondary)", marginBottom: "2px" }}>{icon}</span>
      ) : null}
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: "var(--fw-bold)",
          fontSize: fs,
          lineHeight: 1,
          color: "var(--text-heading)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: "var(--fw-bold)",
          fontSize: "var(--fs-label)",
          letterSpacing: "var(--ls-caps)",
          textTransform: "uppercase",
          color: "var(--text-muted)",
        }}
      >
        {label}
      </div>
      {sublabel ? (
        <div style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{sublabel}</div>
      ) : null}
    </div>
  );
}
