import * as React from "react";
export interface HighlightRow { number?: React.ReactNode; title: React.ReactNode; icon?: React.ReactNode; bullets?: React.ReactNode[]; visual?: React.ReactNode; }
export interface InvestmentHighlightsProps { highlights: HighlightRow[]; className?: string; style?: React.CSSProperties; }
/** STR-INVESTMENT-HIGHLIGHTS-ROWS — stack of NumberedHighlight rows. @dsCard group="Structures" */
export function InvestmentHighlights(props: InvestmentHighlightsProps): JSX.Element;
