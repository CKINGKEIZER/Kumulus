import * as React from "react";
import { WaterfallChartProps } from "../charts/WaterfallChart";
import { CommentaryItem } from "../data/NumberedCommentary";
export interface BridgeCommentaryProps { bridge: WaterfallChartProps; bridgeTitle?: React.ReactNode; commentary: CommentaryItem[]; commentaryColumns?: number; className?: string; style?: React.CSSProperties; }
/** STR-FIN-BRIDGE-COMMENTARY — waterfall/bridge + driver commentary. @dsCard group="Structures" */
export function BridgeCommentary(props: BridgeCommentaryProps): JSX.Element;
