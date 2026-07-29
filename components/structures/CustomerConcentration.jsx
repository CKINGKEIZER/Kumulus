import React from "react";
import { ParetoCurve } from "../charts/ParetoCurve.jsx";
import { BulletList } from "../content/BulletList.jsx";

/**
 * CustomerConcentration — SlideStructure STR-CUSTOMER-CONCENTRATION. A left
 * pareto concentration curve + right cohort/commentary bullets. A key diligence
 * slide. Inside a SlideFrame.
 */
export function CustomerConcentration({ curve, commentary = [], ratio = "1fr 1fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: ratio, gap: "var(--col-gap)", height: "100%", alignItems: "center", ...style }}>
      <ParetoCurve {...curve} />
      <BulletList items={commentary} />
    </div>
  );
}
