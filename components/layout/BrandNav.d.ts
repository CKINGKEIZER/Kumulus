import * as React from "react";
export interface BrandNavProps { brands: React.ReactNode[]; activeBrand?: React.ReactNode; geographies?: React.ReactNode[]; className?: string; style?: React.CSSProperties; }
/** Torino brand-tabs + geographies header cluster. */
export function BrandNav(props: BrandNavProps): JSX.Element;
