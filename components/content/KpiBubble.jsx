import React from "react";
/** KpiBubble — a circular accent stat coin: a bold delta figure in a filled
 * disc + an optional caption. Used beneath checklists / beside imagery. */
export function KpiBubble({ value, caption = null, size = 92, className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, ...style }}>
      <div style={{ width: size, height: size, borderRadius: "999px", background: "var(--deal-accent)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-kpi)", textAlign: "center" }}>{value}</div>
      {caption ? <div style={{ fontSize: "var(--fs-body-sm)", textAlign: "center", maxWidth: size * 1.6 }}>{caption}</div> : null}
    </div>
  );
}
