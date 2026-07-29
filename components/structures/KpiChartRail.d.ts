import * as React from "react";
import { ColumnChartProps } from "../charts/ColumnChart";
export interface RailChart { title?: React.ReactNode; chart: ColumnChartProps; }
export interface KpiChartRailProps { charts: RailChart[]; panel?: React.ReactNode; panelTitle?: React.ReactNode; className?: string; style?: React.CSSProperties; }
/** STR-KPI-CHART-RAIL — chart rail over a full-width panel. @dsCard group="Structures" */
export function KpiChartRail(props: KpiChartRailProps): JSX.Element;
