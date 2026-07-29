import React from "react";
import { HubSpoke } from "../diagrams/HubSpoke.jsx";

/**
 * HighlightHub — SlideStructure STR-HIGHLIGHT-HUB. A central hub (Torino
 * diamond / 3-pillar) radiating to the supporting highlights. Inside a SlideFrame.
 */
export function HighlightHub({ hub, spokes = [], shape = "diamond", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", ...style }}>
      <HubSpoke hub={hub} spokes={spokes} shape={shape} />
    </div>
  );
}
