import React from "react";
import { BulletList } from "../content/BulletList.jsx";

/**
 * MarketSizing — SlideStructure STR-MARKET-SIZING. A sizing device on the left
 * (a Funnel / Pyramid / stacked ColumnChart passed as `device`) + grounded
 * commentary bullets on the right. Inside a SlideFrame.
 */
export function MarketSizing({ device, commentary = [], ratio = "1fr 1fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: ratio, gap: "var(--col-gap)", height: "100%", alignItems: "center", ...style }}>
      <div>{device}</div>
      <BulletList items={commentary} />
    </div>
  );
}
