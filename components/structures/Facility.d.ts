import * as React from "react";
export interface FacilityProps { columns: React.ReactNode[][]; className?: string; style?: React.CSSProperties; }
/** STR-FACILITY — 3-column facility gallery (floorplans + photos + panels). @dsCard group="Structures" */
export function Facility(props: FacilityProps): JSX.Element;
