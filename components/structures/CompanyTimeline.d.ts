import * as React from "react";
import { TimelinePhase, TimelineEvent } from "../diagrams/Timeline";
export interface CompanyTimelineProps { phases?: TimelinePhase[]; events: TimelineEvent[]; className?: string; style?: React.CSSProperties; }
/** STR-TIMELINE — company/acquisition history timeline. @dsCard group="Structures" */
export function CompanyTimeline(props: CompanyTimelineProps): JSX.Element;
