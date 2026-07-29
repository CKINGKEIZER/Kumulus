import React from "react";

/**
 * PhotoPanel — the house framed image slot. Renders a real asset when `src` is
 * given, else a placeholder; floating variant gets the house shadow. Optional
 * small-caps caption. Real transparent-PNG assets go here (the biggest "AI tell"
 * is a generic/empty image).
 */
export function PhotoPanel({ src = null, alt = "", caption = null, floating = false, height = 180, className = "", style = {} }) {
  return (
    <figure className={className} style={{ margin: 0, ...style }}>
      <div style={{ height, background: "var(--surface-band)", border: "var(--rule-separator)", borderRadius: 3, boxShadow: floating ? "var(--shadow-house)" : "none", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {src ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <span style={{ fontSize: "var(--fs-footnote)", color: "var(--text-muted)" }}>[ image ]</span>}
      </div>
      {caption ? <figcaption style={{ fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", fontWeight: "var(--fw-bold)", color: "var(--text-heading)", marginTop: 4, textAlign: "center" }}>{caption}</figcaption> : null}
    </figure>
  );
}
