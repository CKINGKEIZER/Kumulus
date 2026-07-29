import React from "react";

/**
 * CompetitionMatrix — SlideStructure STR-COMPETITION-MATRIX. A landscape device
 * (a Matrix2x2 positioning map, or a ComparisonMatrix coverage table, passed as
 * `landscape`) + an optional profile/legend panel. Inside a SlideFrame.
 */
export function CompetitionMatrix({ landscape, profile = null, ratio = "1.6fr 1fr", className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: profile ? ratio : "1fr", gap: "var(--col-gap)", height: "100%", alignItems: "start", ...style }}>
      <div>{landscape}</div>
      {profile ? <div>{profile}</div> : null}
    </div>
  );
}
