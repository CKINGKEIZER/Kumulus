import * as React from "react";

export interface HarveyBallProps {
  /** Fill level 0–4 (empty → full). */
  level?: number;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}
/** 0–4 fill rating glyph in the deal primary colour. */
export function HarveyBall(props: HarveyBallProps): JSX.Element;

export interface MatrixRow {
  label: React.ReactNode;
  /** One cell per column: number 0–4 → HarveyBall; true/false → check/dash; else ReactNode. */
  cells: (number | boolean | React.ReactNode)[];
}
export interface ComparisonMatrixProps {
  columns: { label: React.ReactNode }[];
  rows: MatrixRow[];
  /** Optional vertical deal-primary tab label down the left edge. */
  tabLabel?: React.ReactNode;
  firstColHead?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
/** Capability / competitive / field-description-impact matrix with harvey-ball cells. */
export function ComparisonMatrix(props: ComparisonMatrixProps): JSX.Element;
