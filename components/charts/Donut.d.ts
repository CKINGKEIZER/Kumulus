import * as React from "react";
export interface DonutSegment { value: number; label?: React.ReactNode; color?: string; }
export interface DonutProps {
  segments: DonutSegment[];
  size?: number;
  thickness?: number;
  centerLabel?: React.ReactNode;
  centerSub?: React.ReactNode;
  legend?: boolean;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}
/** Segmented donut/share chart themed via --deal-chart-*, with optional centre label + legend. */
export function Donut(props: DonutProps): JSX.Element;
