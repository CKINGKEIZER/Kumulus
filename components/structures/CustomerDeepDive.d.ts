import * as React from "react";
export interface CustomerDeepDiveProps { panels: React.ReactNode[]; clients?: React.ReactNode; className?: string; style?: React.CSSProperties; }
/** STR-CUSTOMER-DEEPDIVE — coordinated customer chart panels + client table. @dsCard group="Structures" */
export function CustomerDeepDive(props: CustomerDeepDiveProps): JSX.Element;
