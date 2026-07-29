import * as React from "react";

export interface WaterfallItem {
  label: React.ReactNode;
  /** Numeric value: an absolute total (kind="anchor") or a signed delta. */
  value: number;
  /** "anchor" = full-height total column; otherwise a floating driver bar. */
  kind?: "anchor" | "delta";
  /** Optional pre-formatted label shown above the bar (else formatValue(value)). */
  display?: React.ReactNode;
}

export interface WaterfallChartProps {
  items: WaterfallItem[];
  height?: number;
  formatValue?: (n: number) => string;
  anchorColor?: string;
  upColor?: string;
  downColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** IM bridge / waterfall: anchor totals + floating driver deltas. */
export function WaterfallChart(props: WaterfallChartProps): JSX.Element;
