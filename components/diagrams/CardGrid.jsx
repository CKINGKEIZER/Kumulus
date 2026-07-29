import React from "react";
import { PhotoPanel } from "../media/PhotoPanel.jsx";
/** CardGrid — a uniform N-column grid of equal cards, each a pic/icon chip + a
 * caps label + a short line. The capability / product / icon-card grid. */
export function CardGrid({ cards = [], columns = 4, className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 14, ...style }}>
      {cards.map((c, i) => (
        <div key={i} style={{ border: "var(--border-hair)", borderRadius: 3, padding: 10, display: "flex", flexDirection: "column", gap: 6 }}>
          {c.image !== false ? <PhotoPanel src={c.src || null} height={70} /> : null}
          <div style={{ fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", fontWeight: "var(--fw-bold)", color: "var(--text-heading)" }}>{c.title}</div>
          {c.text ? <div style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{c.text}</div> : null}
        </div>
      ))}
    </div>
  );
}
