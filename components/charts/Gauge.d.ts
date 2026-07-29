import * as React from "react";
export interface GaugeProps { value: number; min?: number; max?: number; readout?: React.ReactNode; caption?: React.ReactNode; size?: number; className?: string; style?: React.CSSProperties; }
export function Gauge(props: GaugeProps): JSX.Element;
