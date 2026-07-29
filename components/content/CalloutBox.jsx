import React from "react";
/** CalloutBox — an inset emphasis box: an optional flag/caption (e.g. "! DANGER")
 * + short italic body. Sets qualifying copy apart from the main bullets. */
export function CalloutBox({ label = null, children, flag = false, className = "", style = {} }) {
  return (
    <div className={className} style={{ border: "var(--border-hair)", borderLeft: "3px solid var(--deal-accent)", background: "var(--surface-band)", borderRadius: 3, padding: "8px 12px", ...style }}>
      {label ? <div style={{ fontWeight: "var(--fw-bold)", fontStyle: "italic", fontSize: "var(--fs-body-sm)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--text-heading)" }}>{flag ? "! " : ""}{label}</div> : null}
      <div style={{ fontStyle: "italic", fontSize: "var(--fs-body-sm)", color: "var(--text-body)", marginTop: label ? 3 : 0 }}>{children}</div>
    </div>
  );
}
