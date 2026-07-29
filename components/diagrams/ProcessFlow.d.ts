import * as React from "react";
export interface ProcessStepItem { label: React.ReactNode; body?: React.ReactNode; }
export interface ProcessFlowProps {
  steps: ProcessStepItem[];
  ramp?: boolean;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
}
/** Chevron process/value-chain row (LP-PROCESS-CHEVRON) themed via --deal-primary. */
export function ProcessFlow(props: ProcessFlowProps): JSX.Element;
