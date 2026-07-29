import * as React from "react";
export interface TimelinePhase { label: React.ReactNode; flex?: number; }
export interface TimelineEvent { year: React.ReactNode; text: React.ReactNode; side?: "top" | "bottom"; }
export interface TimelineProps {
  phases?: TimelinePhase[];
  events: TimelineEvent[];
  className?: string;
  style?: React.CSSProperties;
}
/** Company-history timeline: deal-ramp phase chevrons + year-node line with alternating captions. */
export function Timeline(props: TimelineProps): JSX.Element;
