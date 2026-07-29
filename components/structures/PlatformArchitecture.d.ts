import * as React from "react";
import { TreeTier } from "../diagrams/Tree";
export interface PlatformArchitectureProps { tiers: TreeTier[]; className?: string; style?: React.CSSProperties; }
/** STR-PLATFORM-ARCHITECTURE — layered Tree architecture stack. @dsCard group="Structures" */
export function PlatformArchitecture(props: PlatformArchitectureProps): JSX.Element;
