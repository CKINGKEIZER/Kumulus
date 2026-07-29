import React from "react";

export interface KpiTableColumn {
  label: React.ReactNode;
  /** CSS grid track (e.g. "1fr", "120px"). Default "1fr". */
  width?: string;
  align?: "left" | "center" | "right";
}

/** KpiTable — compact reference table with small-caps header + hairline rows. */
export interface KpiTableProps {
  columns: KpiTableColumn[];
  /** Row data, each an array of cells matching `columns`. */
  rows: React.ReactNode[][];
  className?: string;
  style?: React.CSSProperties;
}
export function KpiTable(props: KpiTableProps): JSX.Element;
