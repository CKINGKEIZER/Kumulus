import * as React from "react";
export interface NoteGroup { label: React.ReactNode; items: React.ReactNode[]; }
export interface LabeledNotesProps { groups: NoteGroup[]; boxed?: boolean; className?: string; style?: React.CSSProperties; }
/** Stack of small-caps sub-headers each over a bullet list. */
export function LabeledNotes(props: LabeledNotesProps): JSX.Element;
