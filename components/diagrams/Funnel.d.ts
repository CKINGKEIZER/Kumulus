import * as React from "react";
export interface FunnelStage { label: React.ReactNode; value: React.ReactNode; sub?: React.ReactNode; }
export interface FunnelProps { stages: FunnelStage[]; callouts?: React.ReactNode[]; height?: number; className?: string; style?: React.CSSProperties; }
/** Tapered funnel (TAM/SAM/SOM, pipeline). */
export function Funnel(props: FunnelProps): JSX.Element;
