import React from "react";

/** BarRow — one labelled horizontal bar with a trailing ValueCapsule. */
export interface BarRowProps {
  /** Small-caps row label. */
  label: React.ReactNode;
  /** Numeric value driving bar width. */
  value: number;
  /** Scale maximum (bar = value/max). */
  max: number;
  /** Capsule text override (defaults to `value`). */
  display?: React.ReactNode;
  /** Width of the label column (default "82px"). */
  labelWidth?: string;
  /** Bar fill color (default --chart-1 navy). */
  barColor?: string;
  capsuleTone?: "sky" | "navy";
  className?: string;
  style?: React.CSSProperties;
}
export function BarRow(props: BarRowProps): JSX.Element;
