import * as React from "react";
export interface FullbleedHighlightProps { number: React.ReactNode; claim: React.ReactNode; photoSrc?: string | null; className?: string; style?: React.CSSProperties; }
/** STR-FULLBLEED-HIGHLIGHT — full-bleed photo + diamond-badge claim bar (whole slide). @dsCard group="Structures" */
export function FullbleedHighlight(props: FullbleedHighlightProps): JSX.Element;
