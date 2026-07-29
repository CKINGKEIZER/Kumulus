import * as React from "react";
import { FinancialTableProps } from "../data/FinancialTable";
import { CommentaryItem } from "../data/NumberedCommentary";

export interface FinancialStatementProps {
  /** Props for the left FinancialTable (columns, rows with markers, kpis, note). */
  table: FinancialTableProps;
  /** Notes for the right NumberedCommentary rail; numbers key to table row markers. */
  commentary: CommentaryItem[];
  /** Box the commentary rail (default true). */
  boxedCommentary?: boolean;
  /** Commentary rail column count (default 1). */
  commentaryColumns?: number;
  /** CSS grid split for table | commentary (default "1.5fr 1fr"). */
  ratio?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * SlideStructure skeleton STR-FIN-STATEMENT-COMMENTARY — FinancialTable +
 * NumberedCommentary rail. Render inside a <SlideFrame variant="content">.
 *
 * @dsCard group="Structures"
 */
export function FinancialStatement(props: FinancialStatementProps): JSX.Element;
