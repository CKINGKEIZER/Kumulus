import * as React from "react";
import { ComparisonMatrixProps } from "../data/ComparisonMatrix";
export interface CriteriaBenchmarkProps { matrix: ComparisonMatrixProps; positioning?: React.ReactNode; ratio?: string; className?: string; style?: React.CSSProperties; }
/** STR-CRITERIA-BENCHMARK — ComparisonMatrix + optional positioning panel. @dsCard group="Structures" */
export function CriteriaBenchmark(props: CriteriaBenchmarkProps): JSX.Element;
