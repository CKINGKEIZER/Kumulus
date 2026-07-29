import React from "react";

/**
 * NumberedCommentary — the numbered commentary rail that pairs with a
 * FinancialTable (PRIM-TABLE-NUMBERED-COMMENTARY). Each note is led by a small
 * deal-accent number chip that keys to the table's row `marker`s, followed by a
 * body-size paragraph and optional nested triangle sub-bullets. Optionally
 * wrapped in a hairline box (the Torino execution) and laid out in 1–2 columns.
 * All text is body size — no second scale.
 */
export function NumberedCommentary({
  items = [],
  markerColor = "var(--deal-header-fill)",
  boxed = false,
  columns = 1,
  className = "",
  style = {},
}) {
  const Chip = ({ n }) => (
    <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 15, height: 15, borderRadius: "999px", background: markerColor, color: "var(--deal-header-text)", fontSize: 9, fontWeight: "var(--fw-bold)", marginTop: 1 }}>{n}</span>
  );
  const wrap = {
    fontFamily: "var(--font-sans)",
    fontSize: "var(--fs-body-sm)",
    color: "var(--text-body)",
    lineHeight: "var(--lh-body)",
    display: columns > 1 ? "grid" : "flex",
    flexDirection: columns > 1 ? undefined : "column",
    gridTemplateColumns: columns > 1 ? `repeat(${columns}, 1fr)` : undefined,
    gap: 8,
    boxSizing: "border-box",
    ...(boxed ? { border: "var(--border-hair)", borderRadius: 3, padding: 12 } : {}),
    ...style,
  };
  return (
    <div className={className} style={wrap}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
          {it.n != null ? <Chip n={it.n} /> : null}
          <div>
            <span>{it.body}</span>
            {it.bullets && it.bullets.length ? (
              <ul style={{ margin: "4px 0 0", padding: 0, listStyle: "none" }}>
                {it.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: 6, marginTop: 3 }}>
                    <span style={{ color: markerColor, flex: "0 0 auto" }}>&#9655;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
