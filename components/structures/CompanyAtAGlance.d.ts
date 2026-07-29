import * as React from "react";
import { KpiTile } from "../content/KpiTileGrid";
import { ColumnChartProps } from "../charts/ColumnChart";
import { DashboardCell } from "../charts/DashboardPanel";
export interface CompanyAtAGlanceProps { kpis: KpiTile[]; narrative: React.ReactNode[]; chart: ColumnChartProps; chartTitle?: React.ReactNode; dashboard: DashboardCell[]; ratio?: string; className?: string; style?: React.CSSProperties; }
/** STR-COMPANY-AT-A-GLANCE — KPI grid + narrative + chart + dashboard. @dsCard group="Structures" */
export function CompanyAtAGlance(props: CompanyAtAGlanceProps): JSX.Element;
