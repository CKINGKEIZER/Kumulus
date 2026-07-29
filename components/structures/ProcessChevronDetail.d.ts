import * as React from "react";
import { ProcessStepItem } from "../diagrams/ProcessFlow";
export interface ProcessChevronDetailProps { steps: ProcessStepItem[]; details: React.ReactNode[][]; className?: string; style?: React.CSSProperties; }
/** STR-PROCESS-CHEVRON-DETAIL — chevron steps + detail columns. @dsCard group="Structures" */
export function ProcessChevronDetail(props: ProcessChevronDetailProps): JSX.Element;
