import React from "react";
import { Timeline } from "../diagrams/Timeline.jsx";

/**
 * CompanyTimeline — SlideStructure STR-TIMELINE. A company/acquisition history
 * timeline (phase chevrons + year-node events). Inside a SlideFrame.
 */
export function CompanyTimeline({ phases = null, events = [], className = "", style = {} }) {
  return (
    <div className={className} style={{ display: "flex", alignItems: "center", height: "100%", ...style }}>
      <Timeline phases={phases} events={events} style={{ width: "100%" }} />
    </div>
  );
}
