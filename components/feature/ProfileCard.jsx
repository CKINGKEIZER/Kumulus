import React from "react";
import { PhotoPanel } from "../media/PhotoPanel.jsx";

/**
 * ProfileCard — a management / leadership card: portrait + name + role (deal
 * small-caps) + a short bio. Tiles into a profile grid.
 */
export function ProfileCard({ name, role, bio = null, photoSrc = null, className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      <PhotoPanel src={photoSrc} height={130} />
      <div>
        <div style={{ fontWeight: "var(--fw-bold)", fontSize: "var(--fs-body-sm)" }}>{name}</div>
        <div style={{ fontSize: "var(--fs-label)", letterSpacing: "var(--ls-caps)", textTransform: "uppercase", color: "var(--deal-primary)" }}>{role}</div>
        {bio ? <div style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-body)", marginTop: 3, lineHeight: "var(--lh-body)" }}>{bio}</div> : null}
      </div>
    </div>
  );
}
