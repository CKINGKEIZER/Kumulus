import * as React from "react";
export interface VennProps { circles: React.ReactNode[]; overlapLabel?: React.ReactNode; size?: number; className?: string; style?: React.CSSProperties; }
export function Venn(props: VennProps): JSX.Element;
