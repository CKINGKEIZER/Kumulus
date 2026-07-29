import React from "react";

/** KumulusMark — Kumulus Partners footer wordmark rendered in CSS. */
export interface KumulusMarkProps {
  /** Cap height of the wordmark in px (default 24). */
  height?: number;
  /** Wordmark color (default brand navy). */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function KumulusMark(props: KumulusMarkProps): JSX.Element;
