import * as React from "react";
export interface GridCard { title: React.ReactNode; text?: React.ReactNode; src?: string | null; image?: boolean; }
export interface CardGridProps { cards: GridCard[]; columns?: number; className?: string; style?: React.CSSProperties; }
export function CardGrid(props: CardGridProps): JSX.Element;
