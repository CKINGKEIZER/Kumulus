import React from "react";
import { ProfileCard } from "../feature/ProfileCard.jsx";

/**
 * ManagementProfiles — SlideStructure STR-MANAGEMENT-PROFILES. An optional intro
 * panel + a grid of portrait ProfileCards. Density contract: a full team, not
 * one card. Inside a SlideFrame.
 */
export function ManagementProfiles({ intro = null, profiles = [], columns = 4, className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "grid", gridTemplateColumns: intro ? "0.8fr 2fr" : "1fr", gap: "var(--col-gap)", height: "100%", alignItems: "start", ...style }}>
      {intro ? <div>{intro}</div> : null}
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 16 }}>
        {profiles.map((p, i) => <ProfileCard key={i} {...p} />)}
      </div>
    </div>
  );
}
