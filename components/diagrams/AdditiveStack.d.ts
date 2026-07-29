import * as React from "react";
export interface AdditiveCard { label: React.ReactNode; sub?: React.ReactNode; }
export interface AdditiveStackProps { cards: AdditiveCard[]; className?: string; style?: React.CSSProperties; }
export function AdditiveStack(props: AdditiveStackProps): JSX.Element;
