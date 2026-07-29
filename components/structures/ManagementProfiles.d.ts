import * as React from "react";
import { ProfileCardProps } from "../feature/ProfileCard";
export interface ManagementProfilesProps { intro?: React.ReactNode; profiles: ProfileCardProps[]; columns?: number; className?: string; style?: React.CSSProperties; }
/** STR-MANAGEMENT-PROFILES — intro + portrait ProfileCard grid. @dsCard group="Structures" */
export function ManagementProfiles(props: ManagementProfilesProps): JSX.Element;
