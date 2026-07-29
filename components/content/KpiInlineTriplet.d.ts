import * as React from "react";
export interface KpiInlineCell { value: React.ReactNode; label: React.ReactNode; }
export interface KpiInlineTripletProps { cells: KpiInlineCell[]; className?: string; style?: React.CSSProperties; }
export function KpiInlineTriplet(props: KpiInlineTripletProps): JSX.Element;
