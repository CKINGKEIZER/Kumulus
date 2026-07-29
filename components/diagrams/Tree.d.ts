import * as React from "react";
export interface TreeNode { label: React.ReactNode; sub?: React.ReactNode; }
export interface TreeTier { label?: React.ReactNode; nodes: TreeNode[]; }
export interface TreeProps { tiers: TreeTier[]; className?: string; style?: React.CSSProperties; }
/** Layered hierarchy tree (org / ownership / service / architecture). */
export function Tree(props: TreeProps): JSX.Element;
