import React from "react";
import { WaterfallChart } from "../charts/WaterfallChart.jsx";
import { NumberedCommentary } from "../data/NumberedCommentary.jsx";
import { PanelHeader } from "../content/PanelHeader.jsx";

/**
 * BridgeCommentary — SlideStructure STR-FIN-BRIDGE-COMMENTARY. A waterfall /
 * bridge band on top + a numbered driver-commentary panel beneath. Render
 * inside a SlideFrame.
 */
export function BridgeCommentary({ bridge, bridgeTitle = null, commentary = [], commentaryColumns = 2, className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 16, height: "100%", ...style }}>
      <div style={{ border: "var(--border-hair)", borderRadius: 3, padding: 12 }}>
        {bridgeTitle ? <PanelHeader>{bridgeTitle}</PanelHeader> : null}
        <WaterfallChart {...bridge} />
      </div>
      <NumberedCommentary items={commentary} columns={commentaryColumns} boxed />
    </div>
  );
}
