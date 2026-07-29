import React from "react";

/**
 * Funnel — tapered stage device (TAM/SAM/SOM market sizing, pipeline
 * narrowing). Each stage is a band that narrows downward, holding a value +
 * small-caps label; optional side callouts align to the stages.
 */
export function Funnel({ stages = [], callouts = [], height = 340, className = "", style = {} }) {
  const n = stages.length || 1;
  return (
    <div className={className} style={{ display: "flex", gap: 16, ...style }}>
      <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        {stages.map((s, i) => {
          const w = 100 - i * (55 / n);
          return (
            <div key={i} style={{ width: `${w}%`, minHeight: height / n, background: `var(--deal-chart-${(i % 5) + 1})`, color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "4px 8px", borderRadius: 2 }}>
              <div style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-kpi)" }}>{s.value}</div>
              <div style={{ fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase" }}>{s.label}</div>
              {s.sub ? <div style={{ fontSize: "var(--fs-footnote)", opacity: 0.9 }}>{s.sub}</div> : null}
            </div>
          );
        })}
      </div>
      {callouts.length ? (
        <div style={{ flex: "0 0 42%", display: "flex", flexDirection: "column", justifyContent: "space-around", fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>
          {callouts.map((c, i) => <div key={i}>{c}</div>)}
        </div>
      ) : null}
    </div>
  );
}
