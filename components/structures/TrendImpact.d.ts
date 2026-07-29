import * as React from "react";
import { ComparisonMatrixProps } from "../data/ComparisonMatrix";
export interface TrendImpactProps { matrix: ComparisonMatrixProps; className?: string; style?: React.CSSProperties; }
/** STR-TREND-IMPACT — full-width trend/description/impact ComparisonMatrix. @dsCard group="Structures" */
export function TrendImpact(props: TrendImpactProps): JSX.Element;
