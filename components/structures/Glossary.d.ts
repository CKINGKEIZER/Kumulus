import * as React from "react";
import { GlossaryTerm } from "../data/GlossaryGrid";
export interface GlossaryProps { terms: GlossaryTerm[]; columns?: number; className?: string; style?: React.CSSProperties; }
/** STR-GLOSSARY — abbreviations grid. @dsCard group="Structures" */
export function Glossary(props: GlossaryProps): JSX.Element;
