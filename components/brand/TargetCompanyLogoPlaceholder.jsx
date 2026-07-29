import React from "react";

/**
 * TargetCompanyLogoPlaceholder — the MANDATORY yellow placeholder that stands
 * in for a target-company logo until a real asset is supplied (Plan §8).
 * It must never collapse or disappear; supplying a logo replaces it at the
 * same dimensions with a contain-fit image. It is visually distinct from the
 * Kumulus (advisor) mark and must never be confused with it.
 *
 * Use `<ThirdPartyLogoPlaceholder>` (neutral grey) for supplier / customer
 * logos instead — never this yellow one.
 */
const VARIANTS = {
  "cover-large":   { h: 96,  fs: 13, label: "TARGET COMPANY LOGO" },
  "header-medium": { h: 34,  fs: 8,  label: "TARGET LOGO" },
  "footer-small":  { h: 16,  fs: 6,  label: "TARGET LOGO" },
  "diagram-node":  { h: 48,  fs: 8,  label: "TARGET" },
};

export function TargetCompanyLogoPlaceholder({
  variant = "footer-small",
  width = null,
  height = null,
  label = null,
  className = "",
  style = {},
}) {
  const v = VARIANTS[variant] || VARIANTS["footer-small"];
  const h = height ?? v.h;
  return (
    <div
      className={className}
      role="img"
      aria-label="Target company logo placeholder"
      style={{
        height: h,
        width: width ?? (h * 2.6),
        minWidth: h * 1.8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 6px",
        boxSizing: "border-box",
        background: "var(--placeholder-target-fill)",
        border: "1px solid var(--placeholder-target-border)",
        borderRadius: "var(--radius-sm)",
        color: "var(--placeholder-target-text)",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-bold)",
        fontSize: label === false ? 0 : v.fs,
        letterSpacing: "var(--ls-caps)",
        textTransform: "uppercase",
        lineHeight: 1.05,
        ...style,
      }}
    >
      {label === false ? null : (label ?? v.label)}
    </div>
  );
}

/**
 * TargetLogo — renders the supplied target-company logo (contain-fit) or the
 * mandatory yellow placeholder when none is given. Dimensions stay constant
 * whether the logo is present or not.
 */
export function TargetLogo({ src = null, alt = "", variant = "footer-small", width = null, height = null, style = {} }) {
  const v = VARIANTS[variant] || VARIANTS["footer-small"];
  const h = height ?? v.h;
  if (!src) {
    return <TargetCompanyLogoPlaceholder variant={variant} width={width} height={height} style={style} />;
  }
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: h, width: width ?? "auto", maxWidth: width ?? (h * 4), objectFit: "contain", display: "block", ...style }}
    />
  );
}

/**
 * ThirdPartyLogoPlaceholder — neutral grey placeholder for supplier / customer
 * (third-party) logos. Deliberately NOT yellow, so it can never be mistaken
 * for the target-company placeholder or the Kumulus mark.
 */
export function ThirdPartyLogoPlaceholder({ label = "LOGO", width = 84, height = 32, style = {} }) {
  return (
    <div
      role="img"
      aria-label="Third-party logo placeholder"
      style={{
        height, width, display: "flex", alignItems: "center", justifyContent: "center",
        background: "var(--placeholder-neutral-fill)",
        border: "1px dashed var(--placeholder-neutral-border)",
        borderRadius: "var(--radius-sm)",
        color: "var(--placeholder-neutral-text)",
        fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)",
        fontSize: label === false ? 0 : 7, letterSpacing: "var(--ls-caps)", textTransform: "uppercase",
        boxSizing: "border-box", ...style,
      }}
    >
      {label === false ? null : label}
    </div>
  );
}
