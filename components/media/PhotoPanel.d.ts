import * as React from "react";
export interface PhotoPanelProps { src?: string | null; alt?: string; caption?: React.ReactNode; floating?: boolean; height?: number; className?: string; style?: React.CSSProperties; }
/** Framed image slot (placeholder when no src); floating = house shadow. */
export function PhotoPanel(props: PhotoPanelProps): JSX.Element;
