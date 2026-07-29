import * as React from "react";
import { TreeTier } from "../diagrams/Tree";
export interface OrgStructureProps { tiers: TreeTier[]; headcount?: React.ReactNode; ratio?: string; className?: string; style?: React.CSSProperties; }
/** STR-ORG-STRUCTURE — org Tree + optional headcount chart. @dsCard group="Structures" */
export function OrgStructure(props: OrgStructureProps): JSX.Element;
