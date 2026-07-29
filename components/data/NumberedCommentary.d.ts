import * as React from "react";

export interface CommentaryItem {
  /** Number keying to a FinancialTable row `marker` (omit for an un-numbered note). */
  n?: number;
  /** The note body (body-size paragraph). */
  body: React.ReactNode;
  /** Optional nested triangle sub-bullets. */
  bullets?: React.ReactNode[];
}

export interface NumberedCommentaryProps {
  items: CommentaryItem[];
  /** Number-chip colour (default deal accent — matches FinancialTable markers). */
  markerColor?: string;
  /** Wrap in a hairline box (the Torino execution). Default false. */
  boxed?: boolean;
  /** Lay the notes out in N columns (default 1). */
  columns?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Numbered commentary rail that pairs with a FinancialTable. */
export function NumberedCommentary(props: NumberedCommentaryProps): JSX.Element;
