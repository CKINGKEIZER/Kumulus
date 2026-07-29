import React from "react";
/** HeroTriangle — a decorative deal-primary triangle wedge with a white ellipse;
 * a header accent, not a data element. */
export function HeroTriangle({ width = 160, height = 120, className = "", style = {} }) {
  return (
    <div className={className} style={{ position: "relative", width, height, ...style }}>
      <div style={{ position: "absolute", inset: 0, background: "var(--deal-primary)", clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
      <div style={{ position: "absolute", left: "50%", top: "62%", transform: "translate(-50%,-50%)", width: width * 0.32, height: height * 0.32, borderRadius: "999px", background: "#fff", opacity: 0.9 }} />
    </div>
  );
}
