import React from "react";

/**
 * GlossaryGrid — the abbreviations reference grid: N columns of {term chip,
 * definition bar}. The term chip is a deal-accent capsule; the definition sits
 * in a grey bar. Reference / appendix pages.
 */
export function GlossaryGrid({ terms = [], columns = 2, className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "8px 24px", ...style }}>
      {terms.map((t, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
          <span style={{ flex: "0 0 96px", background: "var(--deal-accent)", color: "var(--deal-primary-deep)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)", padding: "4px 8px", borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>{t.term}</span>
          <span style={{ flex: "1 1 auto", background: "var(--surface-band)", fontSize: "var(--fs-body-sm)", padding: "4px 10px", borderRadius: 2, display: "flex", alignItems: "center", color: "var(--text-body)" }}>{t.def}</span>
        </div>
      ))}
    </div>
  );
}
