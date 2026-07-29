import * as React from "react";
import { ProcessStepItem } from "../diagrams/ProcessFlow";
export interface ValueChainProps { stages: ProcessStepItem[]; insight?: React.ReactNode[]; className?: string; style?: React.CSSProperties; }
/** STR-VALUE-CHAIN — ProcessFlow value-chain + insight. @dsCard group="Structures" */
export function ValueChain(props: ValueChainProps): JSX.Element;
