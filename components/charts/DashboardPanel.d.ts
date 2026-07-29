import * as React from "react";
export interface DashboardCell { title?: React.ReactNode; chart: React.ReactNode; }
export interface DashboardPanelProps { cells: DashboardCell[]; className?: string; style?: React.CSSProperties; }
/** Grey panel hosting N labelled chart cells (the 3-graph dashboard). */
export function DashboardPanel(props: DashboardPanelProps): JSX.Element;
