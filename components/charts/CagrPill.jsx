import React from "react";

/**
 * Chart annotation atoms used across IM chart slides:
 *  - CagrPill: grey rounded pill with a dashed up-arrow + growth %, the house
 *    CAGR/delta callout ("5.4%", "34.4%").
 *  - MarginCapsule: outline rounded pill for a margin/ratio readout ("45.5%"),
 *    used on the GROSS MARGIN row beneath charts.
 *  - RefChip: black rounded pill with a magnifier + page ref ("P. 47"), the
 *    house cross-reference marker.
 */
export function CagrPill({ value, label = null, style = {} }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "var(--gray-300)", color: "var(--text-heading)", borderRadius: "5px", padding: "3px 8px", fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: 12, ...style }}>
      <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true"><path d="M1 10 L11 3" stroke="var(--text-heading)" strokeWidth="1.3" strokeDasharray="2 2" fill="none" /><path d="M8 2 L12 2.5 L10.5 6 Z" fill="var(--text-heading)" /></svg>
      {value}{label ? <span style={{ fontWeight: "var(--fw-regular)", marginLeft: 3 }}>{label}</span> : null}
    </span>
  );
}

export function MarginCapsule({ value, style = {} }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--gray-400)", borderRadius: "5px", padding: "3px 12px", fontFamily: "var(--font-sans)", fontStyle: "italic", fontWeight: "var(--fw-semibold)", fontSize: 12, color: "var(--text-heading)", ...style }}>
      {value}
    </span>
  );
}

export function RefChip({ page, style = {} }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "var(--ink)", color: "#fff", borderRadius: "6px", padding: "3px 9px", fontFamily: "var(--font-sans)", fontWeight: "var(--fw-bold)", fontSize: 11, ...style }}>
      <svg width="11" height="11" viewBox="0 0 12 12" aria-hidden="true"><circle cx="5" cy="5" r="3.4" stroke="#fff" strokeWidth="1.2" fill="none" /><path d="M7.6 7.6 L10.5 10.5" stroke="#fff" strokeWidth="1.4" /></svg>
      P. {page}
    </span>
  );
}
