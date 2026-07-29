import * as React from "react";

export interface FinancialRow {
  /** Row label (left column). */
  label: React.ReactNode;
  /** Pre-formatted cell strings, one per column (e.g. "15.9", "(2.0)", "9.0 %"). */
  values: React.ReactNode[];
  /** Bold row (e.g. totals). */
  bold?: boolean;
  /** Subtotal row — bold on a light grey band (Net revenue, Gross profit, EBITDA…). */
  subtotal?: boolean;
  /** Indent + italic sub-row (Management, Freelancers…). */
  indent?: boolean;
  italic?: boolean;
  /** Numbered marker linking to a commentary rail. */
  marker?: number;
}

export interface FinancialTableProps {
  /** Period column headers, e.g. [{label:"FY24A"}, {label:"LTM Jun-25"}, {label:"CAGR"}]. */
  columns: { label: React.ReactNode }[];
  rows: FinancialRow[];
  /** Optional italic KPI block beneath the table. */
  kpis?: { label: React.ReactNode; values: React.ReactNode[] }[];
  /** Top-left corner label (default "€m"). */
  rowLabelHead?: React.ReactNode;
  note?: React.ReactNode;
  /** Marker circle colour (default deal accent). */
  markerColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** IM financial-statement / KPI table with deal-primary headers and numbered markers. */
export function FinancialTable(props: FinancialTableProps): JSX.Element;
