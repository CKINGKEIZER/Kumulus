import * as React from "react";

export interface ColumnDatum {
  label: React.ReactNode;
  value?: number;
  segments?: { value: number; label?: React.ReactNode }[];
}
export interface ColumnChartProps {
  data: ColumnDatum[];
  mode?: "stacked" | "grouped" | "simple";
  height?: number;
  colors?: string[];
  /** Left-axis category names (stacked mix charts). */
  seriesLabels?: React.ReactNode[];
  showTotals?: boolean;
  formatTotal?: (n: number) => string;
  barWidth?: number;
  gap?: number;
  className?: string;
  style?: React.CSSProperties;
}
/** IM bar/column chart (stacked/grouped) themed via --deal-chart-*. */
export function ColumnChart(props: ColumnChartProps): JSX.Element;
