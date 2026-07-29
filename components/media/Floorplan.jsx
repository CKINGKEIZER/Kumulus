import React from "react";
import { PhotoPanel } from "./PhotoPanel.jsx";
import { PanelHeader } from "../content/PanelHeader.jsx";

/**
 * Floorplan — a titled architectural floor-plan panel (image slot) with a
 * function-colour legend (yellow=offices, green=warehouse, blue=production).
 * Facility-tour slides.
 */
export function Floorplan({ title = null, src = null, legend = [], height = 200, className = "", style = {} }) {
  return (
    <div className={className} style={{ ...style }}>
      {title ? <PanelHeader>{title}</PanelHeader> : null}
      <PhotoPanel src={src} height={height} style={{ marginTop: title ? 6 : 0 }} />
      {legend.length ? (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
          {legend.map((l, i) => <span key={i} style={{ display: "flex", gap: 4, alignItems: "center", fontSize: "var(--fs-footnote)", color: "var(--text-body)" }}><span style={{ width: 10, height: 10, background: l.color, borderRadius: 2 }} />{l.label}</span>)}
        </div>
      ) : null}
    </div>
  );
}
