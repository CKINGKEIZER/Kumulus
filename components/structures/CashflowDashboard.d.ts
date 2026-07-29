import * as React from "react";
import { FinancialTableProps } from "../data/FinancialTable";
import { ColumnChartProps } from "../charts/ColumnChart";
import { NoteGroup } from "../content/LabeledNotes";
export interface CashflowDashboardProps { tables: FinancialTableProps[]; chart: ColumnChartProps; chartTitle?: React.ReactNode; notes: NoteGroup[]; ratio?: string; className?: string; style?: React.CSSProperties; }
/** STR-FIN-CASHFLOW-DASHBOARD — mini tables + stacked chart + notes. @dsCard group="Structures" */
export function CashflowDashboard(props: CashflowDashboardProps): JSX.Element;
