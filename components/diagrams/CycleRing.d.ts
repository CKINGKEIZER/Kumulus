import * as React from "react";
export interface CycleRingProps { stages: React.ReactNode[]; centerLabel?: React.ReactNode; size?: number; className?: string; style?: React.CSSProperties; }
/** Repeating growth cycle / flywheel — stages around a ring. */
export function CycleRing(props: CycleRingProps): JSX.Element;
