import React from "react";
/** AdditiveStack — the "+ + =" device: stacked deal-primary cards joined by
 * circled-plus badges to show components summing to a whole (offering build-up,
 * value stack). Order is not temporal. */
export function AdditiveStack({ cards = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", alignItems: "stretch", gap: 0, ...style }}>
      {cards.map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 ? <div style={{ alignSelf: "center", margin: "-8px 0", zIndex: 1, width: 22, height: 22, borderRadius: "999px", background: "#fff", border: "var(--border-hair)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "var(--fw-bold)", color: "var(--deal-primary)" }}>+</div> : null}
          <div style={{ background: "var(--deal-primary)", color: "#fff", borderRadius: 3, padding: "10px 14px", fontSize: "var(--fs-body-sm)", fontWeight: "var(--fw-bold)" }}>{c.label}{c.sub ? <div style={{ fontWeight: "var(--fw-regular)", opacity: 0.85 }}>{c.sub}</div> : null}</div>
        </React.Fragment>
      ))}
    </div>
  );
}
