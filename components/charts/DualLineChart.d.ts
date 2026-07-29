import * as React from "react";
export interface DualLineSeries { label?: React.ReactNode; values: number[]; }
export interface DualLineChartProps { series: DualLineSeries[]; categories: React.ReactNode[]; height?: number; className?: string; style?: React.CSSProperties; }
export function DualLineChart(props: DualLineChartProps): JSX.Element;
