import * as React from "react";
export interface MarketSizingProps { device: React.ReactNode; commentary: React.ReactNode[]; ratio?: string; className?: string; style?: React.CSSProperties; }
/** STR-MARKET-SIZING — sizing device (Funnel/Pyramid/ColumnChart) + commentary. @dsCard group="Structures" */
export function MarketSizing(props: MarketSizingProps): JSX.Element;
