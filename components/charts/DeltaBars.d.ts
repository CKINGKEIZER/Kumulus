import * as React from "react";
export interface DeltaBar { value: number; label: React.ReactNode; display?: React.ReactNode; }
export interface DeltaBarsProps { start: DeltaBar; end: DeltaBar; delta?: React.ReactNode; height?: number; className?: string; style?: React.CSSProperties; }
export function DeltaBars(props: DeltaBarsProps): JSX.Element;
