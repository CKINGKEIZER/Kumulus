import React from "react";
import { ProcessFlow } from "../diagrams/ProcessFlow.jsx";
import { BulletList } from "../content/BulletList.jsx";

/**
 * ValueChain — SlideStructure STR-VALUE-CHAIN. A horizontal value-chain chevron
 * band (ProcessFlow) + insight commentary beneath, with our focus/position
 * marked on the relevant stages. Inside a SlideFrame.
 */
export function ValueChain({ stages = [], insight = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 20, height: "100%", justifyContent: "center", ...style }}>
      <ProcessFlow steps={stages} />
      {insight.length ? <BulletList items={insight} /> : null}
    </div>
  );
}
