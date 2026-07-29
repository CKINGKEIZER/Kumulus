import * as React from "react";
export interface FloorplanLegend { color: string; label: React.ReactNode; }
export interface FloorplanProps { title?: React.ReactNode; src?: string | null; legend?: FloorplanLegend[]; height?: number; className?: string; style?: React.CSSProperties; }
/** Titled architectural floor-plan panel + function-colour legend. */
export function Floorplan(props: FloorplanProps): JSX.Element;
