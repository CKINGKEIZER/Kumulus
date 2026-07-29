import * as React from "react";
export interface NumberedHighlightProps {
  number: React.ReactNode;
  title: React.ReactNode;
  icon?: React.ReactNode;
  bullets?: React.ReactNode[];
  /** Right-hand visual (chart / logos / donut). */
  visual?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
/** One row of the "Key investment highlights" layout: deal panel + bullets + visual. */
export function NumberedHighlight(props: NumberedHighlightProps): JSX.Element;
