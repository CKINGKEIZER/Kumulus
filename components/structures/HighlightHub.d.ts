import * as React from "react";
export interface HighlightHubProps { hub: React.ReactNode; spokes: React.ReactNode[]; shape?: "diamond" | "circle"; className?: string; style?: React.CSSProperties; }
/** STR-HIGHLIGHT-HUB — central hub + spokes. @dsCard group="Structures" */
export function HighlightHub(props: HighlightHubProps): JSX.Element;
