import React from "react";

/** ColumnHeading — small-caps navy heading with a hairline rule beneath. */
export interface ColumnHeadingProps {
  children: React.ReactNode;
  /** Optional leading icon. */
  icon?: React.ReactNode;
  /** Underline: "title" = black 0.5pt (default true), "separator" = grey 0.25pt, false = none. */
  rule?: "title" | "separator" | boolean;
  align?: "center" | "left";
  className?: string;
  style?: React.CSSProperties;
}
export function ColumnHeading(props: ColumnHeadingProps): JSX.Element;
