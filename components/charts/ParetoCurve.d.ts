import * as React from "react";
export interface ParetoPoint { x: number; y: number; }
export interface ParetoCurveProps { points: ParetoPoint[]; height?: number; highlight?: { from: number; to: number } | null; className?: string; style?: React.CSSProperties; }
/** Cumulative customer/revenue concentration curve with optional highlight window. */
export function ParetoCurve(props: ParetoCurveProps): JSX.Element;
