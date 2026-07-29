import React from "react";
/** CheckPillHeader — a pale-grey rounded pill holding 2+ navy circled-check
 * glyphs each with a label; a feature/qualifier header strip. */
export function CheckPillHeader({ items = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", gap: 24, justifyContent: "center", background: "var(--surface-band)", borderRadius: "999px", padding: "6px 16px", ...style }}>
      {items.map((it, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "var(--fs-body-sm)" }}>
          <span style={{ display: "inline-flex", width: 16, height: 16, borderRadius: "999px", background: "var(--deal-primary)", color: "#fff", alignItems: "center", justifyContent: "center", fontSize: "var(--fs-footnote)" }}>&#10003;</span>
          {it}
        </span>
      ))}
    </div>
  );
}
