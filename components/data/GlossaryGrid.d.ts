import * as React from "react";
export interface GlossaryTerm { term: React.ReactNode; def: React.ReactNode; }
export interface GlossaryGridProps { terms: GlossaryTerm[]; columns?: number; className?: string; style?: React.CSSProperties; }
/** Abbreviations glossary: term chip + definition bar, N columns. */
export function GlossaryGrid(props: GlossaryGridProps): JSX.Element;
