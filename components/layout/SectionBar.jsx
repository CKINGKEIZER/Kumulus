import React from "react";

/**
 * SectionBar — the cobalt banner that heads a content block on an IM slide.
 * House style: a rounded cobalt bar with a white circular "knob" inset at
 * each end, a centered white small-caps title, and an optional `trailing`
 * slot on the right for framework/icon chips (e.g. ESG / SDG tags, partner
 * logos). `variant="chevron"` swaps the knobs for the right-pointing arrow
 * end used on case-study layouts.
 */
export function SectionBar({
  label,
  icon = null,
  trailing = null,
  variant = "bar",
  height = 30,
  className = "",
  style = {},
}) {
  const isChevron = variant === "chevron";
  const knobSize = height * 0.56;
  const knob = (side) => (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "50%",
        [side]: `${height * 0.22}px`,
        transform: "translateY(-50%)",
        width: knobSize,
        height: knobSize,
        borderRadius: "999px",
        background: "var(--surface-knob)",
      }}
    />
  );
  return (
    <div
      className={className}
      style={{
        position: "relative",
        height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        padding: isChevron ? "0 26px 0 16px" : `0 ${height * 1.4}px`,
        background: "var(--surface-bar)",
        color: "var(--text-on-dark)",
        borderRadius: isChevron ? "0" : "var(--radius-md)",
        clipPath: isChevron
          ? "polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%)"
          : "none",
        ...style,
      }}
    >
      {!isChevron ? knob("left") : null}
      {icon ? (
        <span style={{ display: "inline-flex", alignItems: "center", color: "var(--white)" }}>{icon}</span>
      ) : null}
      <span
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: "var(--fw-bold)",
          fontSize: "var(--fs-section)",
          letterSpacing: "var(--ls-caps-wide)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      {trailing ? (
        <div style={{ position: "absolute", top: "50%", right: `${height * 0.22 + knobSize + 8}px`, transform: "translateY(-50%)", display: "flex", alignItems: "center", gap: "4px" }}>
          {trailing}
        </div>
      ) : null}
      {!isChevron ? knob("right") : null}
    </div>
  );
}
