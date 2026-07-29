import React from "react";
import { Tree } from "../diagrams/Tree.jsx";

/**
 * PlatformArchitecture — SlideStructure STR-PLATFORM-ARCHITECTURE. A layered
 * architecture / module stack rendered as a Tree of tiers. Inside a SlideFrame.
 */
export function PlatformArchitecture({ tiers = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", ...style }}>
      <Tree tiers={tiers} />
    </div>
  );
}
