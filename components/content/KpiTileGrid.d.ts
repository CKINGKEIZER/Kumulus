import * as React from "react";
export interface KpiTile { value: React.ReactNode; label: React.ReactNode; sub?: React.ReactNode; }
export interface KpiTileGridProps { tiles: KpiTile[]; columns?: number; className?: string; style?: React.CSSProperties; }
/** Solid deal-primary KPI tile band (3×N). */
export function KpiTileGrid(props: KpiTileGridProps): JSX.Element;
