import React from "react";

/**
 * PanelHeader — the light grey band with centered small-caps title that heads
 * a content panel in the IM (e.g. "DIVERSIFIED CUSTOMER BASE", "CUSTOMER
 * CONCENTRATION BASED ON REVENUE (FY24A)"). This is the house default for panel
 * headings — NOT a filled deal-colour bar. Colour is reserved for data and the
 * value-chain nav; panels are white/grey. Optional trailing period tag.
 */
export function PanelHeader({ children, trailing = null, tone = "grey", className = "", style = {} }) {
  const bg = tone === "grey" ? "var(--surface-band)" : "transparent";
  return (
    <div className={className} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: bg, padding: "6px 12px", borderRadius: 2, ...style }}>
      <span style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-colhead)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--text-heading)", textAlign: "center" }}>{children}</span>
      {trailing ? <span style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-colhead)", color: "var(--deal-primary)" }}>{trailing}</span> : null}
    </div>
  );
}
