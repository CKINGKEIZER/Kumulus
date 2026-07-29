import * as React from "react";
export interface AcqRow { cells: (React.ReactNode | boolean | React.ReactNode[])[]; }
export interface AcqTargetScanProps { columns: React.ReactNode[]; rows: AcqRow[]; className?: string; style?: React.CSSProperties; }
export function AcqTargetScan(props: AcqTargetScanProps): JSX.Element;
