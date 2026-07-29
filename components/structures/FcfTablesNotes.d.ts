import * as React from "react";
import { FinancialTableProps } from "../data/FinancialTable";
import { NoteGroup } from "../content/LabeledNotes";
export interface FcfTablesNotesProps { tables: FinancialTableProps[]; notes: NoteGroup[]; ratio?: string; className?: string; style?: React.CSSProperties; }
/** STR-FIN-FCF-TABLES-NOTES — 3 stacked FinancialTables + a LabeledNotes panel. @dsCard group="Structures" */
export function FcfTablesNotes(props: FcfTablesNotesProps): JSX.Element;
