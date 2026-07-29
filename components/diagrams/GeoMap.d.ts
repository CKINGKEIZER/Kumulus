import * as React from "react";
export interface GeoRow { name: React.ReactNode; value?: React.ReactNode; flag?: React.ReactNode; color?: string; }
export interface GeoMapProps { rows: GeoRow[]; className?: string; style?: React.CSSProperties; }
export function GeoMap(props: GeoMapProps): JSX.Element;
