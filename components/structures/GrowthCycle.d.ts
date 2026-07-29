import * as React from "react";
export interface CycleDetail { title: React.ReactNode; bullets?: React.ReactNode[]; }
export interface GrowthCycleProps { cycle: React.ReactNode[]; centerLabel?: React.ReactNode; detail?: CycleDetail[]; ratio?: string; className?: string; style?: React.CSSProperties; }
/** STR-GROWTH-CYCLE — CycleRing flywheel + numbered detail. @dsCard group="Structures" */
export function GrowthCycle(props: GrowthCycleProps): JSX.Element;
