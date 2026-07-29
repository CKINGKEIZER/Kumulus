import * as React from "react";
export interface HubSpokeProps { hub: React.ReactNode; spokes: React.ReactNode[]; shape?: "diamond" | "circle"; radius?: number; className?: string; style?: React.CSSProperties; }
/** Central hub (diamond/circle) with radial spoke items. */
export function HubSpoke(props: HubSpokeProps): JSX.Element;
