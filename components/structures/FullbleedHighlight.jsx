import React from "react";

/**
 * FullbleedHighlight — SlideStructure STR-FULLBLEED-HIGHLIGHT. A full-bleed photo
 * with a translucent claim bar carrying a diamond number badge + a serif claim
 * (one per numbered investment highlight). This is the WHOLE slide — do not wrap
 * it in a content SlideFrame.
 */
export function FullbleedHighlight({ number, claim, photoSrc = null, className = "", style = {} }) {
  return (
    <div className={className} style={{ position: "absolute", inset: 0, background: photoSrc ? `center/cover no-repeat url(${photoSrc})` : "var(--surface-band)", ...style }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: "50%", transform: "translateY(-50%)", background: "rgba(244,243,240,0.9)", padding: "18px 40px", display: "flex", alignItems: "center", gap: 24 }}>
        <span style={{ flex: "0 0 auto", width: 48, height: 48, background: "var(--deal-accent)", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ transform: "rotate(-45deg)", fontWeight: "var(--fw-bold)", fontSize: "var(--fs-kpi)", color: "#000" }}>{number}</span>
        </span>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--fs-page-title)", color: "var(--deal-primary-deep)" }}>{claim}</span>
      </div>
    </div>
  );
}
