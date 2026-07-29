import React from "react";

/** KpiCell — a single headline metric with label and optional icon. */
export interface KpiCellProps {
  /** The figure (e.g. "€43M", "7.3", "78%"). */
  value: React.ReactNode;
  /** Small-caps label beneath. */
  label: React.ReactNode;
  /** Optional second line under the label. */
  sublabel?: React.ReactNode;
  /** Optional icon above the figure. */
  icon?: React.ReactNode;
  align?: "center" | "left";
  /** "md" (default) or "lg" hero figure. */
  size?: "md" | "lg";
  className?: string;
  style?: React.CSSProperties;
}
export function KpiCell(props: KpiCellProps): JSX.Element;
