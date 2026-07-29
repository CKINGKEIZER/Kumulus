import * as React from "react";
export interface Matrix2x2Item { x: number; y: number; label: React.ReactNode; highlight?: boolean; }
export interface Matrix2x2Axis { label?: React.ReactNode; }
export interface Matrix2x2Props { xAxis?: Matrix2x2Axis; yAxis?: Matrix2x2Axis; items: Matrix2x2Item[]; size?: number; className?: string; style?: React.CSSProperties; }
/** 2x2 positioning matrix with plotted items. */
export function Matrix2x2(props: Matrix2x2Props): JSX.Element;
