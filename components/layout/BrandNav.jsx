import React from "react";

/**
 * BrandNav — the Torino segment/appendix header cluster: a right-aligned row of
 * brand chips (the active one solid deal-accent), over a "MAIN GEOGRAPHIES"
 * strip of country-flag chips. Sits in the title zone, top-right.
 */
export function BrandNav({ brands = [], activeBrand = null, geographies = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end", ...style }}>
      <div style={{ display: "flex", gap: 6 }}>
        {brands.map((b, i) => {
          const on = b === activeBrand;
          return <span key={i} style={{ fontSize: "var(--fs-label)", fontWeight: "var(--fw-bold)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", padding: "3px 10px", borderRadius: 3, background: on ? "var(--deal-accent)" : "var(--surface-band)", color: on ? "var(--deal-primary-deep)" : "var(--text-muted)" }}>{b}</span>;
        })}
      </div>
      {geographies.length ? (
        <div style={{ display: "flex", gap: 8, alignItems: "center", background: "var(--surface-band)", padding: "3px 8px", borderRadius: 3 }}>
          <span style={{ fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", fontWeight: "var(--fw-bold)", color: "var(--text-heading)" }}>Main geographies</span>
          {geographies.map((g, i) => <span key={i} style={{ fontSize: "var(--fs-footnote)" }}>{g}</span>)}
        </div>
      ) : null}
    </div>
  );
}
