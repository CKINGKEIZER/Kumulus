import React from "react";

/**
 * BusinessModelService — SlideStructure STR-BUSINESS-MODEL-SERVICE. The offering
 * (a Tree or panel, `offering`) + how it makes money (a revenue-stream table or
 * dashboard, `streams`). Inside a SlideFrame.
 */
export function BusinessModelService({ offering, streams, ratio = "1fr 1fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: ratio, gap: "var(--col-gap)", height: "100%", alignItems: "center", ...style }}>
      <div>{offering}</div>
      <div>{streams}</div>
    </div>
  );
}
