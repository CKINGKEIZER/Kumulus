import React from "react";

/**
 * AppendixSegment — SlideStructure STR-APPENDIX-SEGMENT. The Torino product-
 * segment deep-dive: a header row (letter badge + segment title + subtitle, with
 * a BrandNav top-right) over a 2-column body — a narrative panel + a stack of
 * product/concept panels ending in a strategic-vision revenue chart. Self-
 * contained full slide (owns its margins); do not wrap in a content SlideFrame.
 */
export function AppendixSegment({ badge, title, subtitle = null, brandNav = null, narrative, panels = [], vision = null, ratio = "1fr 1.4fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ padding: "var(--slide-margin-top) var(--slide-margin-x)", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 12, ...style }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {badge != null ? <span style={{ flex: "0 0 auto", width: 30, height: 30, borderRadius: "999px", background: "var(--deal-accent)", color: "var(--deal-primary-deep)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "var(--fw-bold)" }}>{badge}</span> : null}
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-title)" }}>{title}</div>
            {subtitle ? <div style={{ fontFamily: "var(--font-serif)", color: "var(--text-muted)", fontSize: "var(--fs-body)" }}>{subtitle}</div> : null}
          </div>
        </div>
        {brandNav}
      </div>
      <div style={{ borderTop: "var(--rule-title)" }} />
      <div style={{ display: "grid", gridTemplateColumns: ratio, gap: "var(--col-gap)", flex: "1 1 auto", minHeight: 0 }}>
        <div>{narrative}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {panels.map((p, i) => <div key={i}>{p}</div>)}
          {vision}
        </div>
      </div>
    </div>
  );
}
