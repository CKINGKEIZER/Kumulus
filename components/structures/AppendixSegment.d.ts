import * as React from "react";
export interface AppendixSegmentProps { badge: React.ReactNode; title: React.ReactNode; subtitle?: React.ReactNode; brandNav?: React.ReactNode; narrative: React.ReactNode; panels?: React.ReactNode[]; vision?: React.ReactNode; ratio?: string; className?: string; style?: React.CSSProperties; }
/** STR-APPENDIX-SEGMENT — brand-nav header + badge/title + narrative + product panels + strategic-vision chart. @dsCard group="Structures" */
export function AppendixSegment(props: AppendixSegmentProps): JSX.Element;
