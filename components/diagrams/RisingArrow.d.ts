import * as React from "react";
export interface RisingStage { label: React.ReactNode; sub?: React.ReactNode; }
export interface RisingArrowProps { stages: RisingStage[]; height?: number; className?: string; style?: React.CSSProperties; }
export function RisingArrow(props: RisingArrowProps): JSX.Element;
