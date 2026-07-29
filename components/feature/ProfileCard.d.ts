import * as React from "react";
export interface ProfileCardProps { name: React.ReactNode; role: React.ReactNode; bio?: React.ReactNode; photoSrc?: string | null; className?: string; style?: React.CSSProperties; }
/** Management/leadership profile card: portrait + name + role + bio. */
export function ProfileCard(props: ProfileCardProps): JSX.Element;
