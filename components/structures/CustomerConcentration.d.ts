import * as React from "react";
import { ParetoCurveProps } from "../charts/ParetoCurve";
export interface CustomerConcentrationProps { curve: ParetoCurveProps; commentary: React.ReactNode[]; ratio?: string; className?: string; style?: React.CSSProperties; }
/** STR-CUSTOMER-CONCENTRATION — pareto curve + commentary. @dsCard group="Structures" */
export function CustomerConcentration(props: CustomerConcentrationProps): JSX.Element;
