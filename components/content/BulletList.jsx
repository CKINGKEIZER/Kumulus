import React from "react";

/**
 * BulletList — the bullet copy list that carries most body text in the IM.
 * House rules (intern manual): spacing ≈3pt before/after each bullet;
 * first-level indent 0.48cm, nested 1cm. Two marker styles exist in the
 * house style: `marker="square"` (navy/cobalt square — IM body copy) and
 * `marker="triangle"` (the customized ▷ bullet from the formatting bible).
 * Each item may be a string or `{ text, sub, items }` — `items` renders a
 * nested second-level list.
 */
export function BulletList({
  items,
  size = "md",
  dense = false,
  marker = "square",
  className = "",
  style = {},
}) {
  const fs = size === "sm" ? "var(--fs-body-sm)" : "var(--fs-body)";
  const Marker = () =>
    marker === "triangle" ? (
      <span style={{ color: "var(--bullet)", fontSize: "0.75em", flex: "0 0 auto", transform: "translateY(-1px)" }}>▷</span>
    ) : (
      <span style={{ width: "5px", height: "5px", background: "var(--bullet)", flex: "0 0 auto", transform: "translateY(-2px)" }} />
    );
  return (
    <ul
      className={className}
      style={{
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: dense ? "5px" : "var(--bullet-gap)",
        color: "var(--text-body)",
        ...style,
      }}
    >
      {items.map((it, i) => {
        const text = typeof it === "string" ? it : it.text;
        const sub = typeof it === "string" ? null : it.sub;
        const kids = typeof it === "string" ? null : it.items;
        return (
          <li key={i} style={{ lineHeight: "var(--lh-body)", fontSize: fs }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "baseline" }}>
              <Marker />
              <span style={{ textWrap: "pretty" }}>
                {text}
                {sub ? <span style={{ display: "block", color: "var(--text-muted)", fontSize: "var(--fs-body-sm)" }}>{sub}</span> : null}
              </span>
            </div>
            {kids ? (
              <BulletList
                items={kids}
                size="sm"
                dense
                marker={marker}
                style={{ marginTop: "5px", marginLeft: "calc(var(--bullet-indent-2) - var(--bullet-indent-1))", paddingLeft: 0 }}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
