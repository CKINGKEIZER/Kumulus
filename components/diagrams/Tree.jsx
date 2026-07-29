import React from "react";

/**
 * Tree — a layered hierarchy: rows (tiers) of boxes connected top→bottom by
 * hairline stems. Serves org charts, ownership/shareholder trees, service
 * offering trees and architecture stacks. Tier 0 is the deal-primary parent
 * row; lower tiers are grey panels.
 */
export function Tree({ tiers = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", alignItems: "center", ...style }}>
      {tiers.map((tier, ti) => (
        <React.Fragment key={ti}>
          {ti > 0 ? <div style={{ width: 0, height: 18, borderLeft: "var(--rule-separator)" }} /> : null}
          {tier.label ? <div style={{ fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", fontWeight: "var(--fw-bold)", color: "var(--text-heading)", marginBottom: 6 }}>{tier.label}</div> : null}
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            {tier.nodes.map((n, ni) => (
              <div key={ni} style={{ background: ti === 0 ? "var(--deal-primary)" : "var(--surface-band)", color: ti === 0 ? "#fff" : "var(--text-body)", border: ti === 0 ? "none" : "var(--rule-separator)", borderRadius: 3, padding: "8px 12px", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-bold)", textAlign: "center", minWidth: 120 }}>
                {n.label}
                {n.sub ? <div style={{ fontWeight: "var(--fw-regular)", fontSize: "var(--fs-footnote)", opacity: 0.85 }}>{n.sub}</div> : null}
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
