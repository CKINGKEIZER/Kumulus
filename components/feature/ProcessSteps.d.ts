import React from "react";

export interface ProcessStep {
  /** Small-caps stage title. */
  title: React.ReactNode;
  /** Bullet detail lines. */
  items: React.ReactNode[];
}

/** ProcessSteps — vertical numbered stages with a connecting rail. */
export interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
  style?: React.CSSProperties;
}
export function ProcessSteps(props: ProcessStepsProps): JSX.Element;
