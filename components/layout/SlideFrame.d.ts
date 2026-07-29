import React from "react";
import { FooterTab } from "./FooterNav";

/**
 * SlideFrame — the fixed 1280x720 chrome every Kumulus IM slide sits in.
 *
 * @dsCard group="Components"
 */
export interface SlideFrameProps {
  /** "content" = title + body + footer; "cover" = full-bleed image cover; "divider" = section opener. */
  variant?: "content" | "cover" | "divider";
  /** Slide title (serif). */
  title: React.ReactNode;
  /** Optional lead-in beneath the title. */
  subtitle?: React.ReactNode;
  /** Key-message band under the title: array of bullet strings, or a ReactNode. */
  band?: React.ReactNode[] | React.ReactNode;
  /** Target-company logo shown in the title row, top-right (image URL). */
  titleLogoSrc?: string;
  titleLogoAlt?: string;
  /** Show the target logo in the title row (default false). */
  showTitleLogo?: boolean;
  /** Slide body. */
  children?: React.ReactNode;

  /** Footer: project line (default "Project [x] | [Month] [Year]"). */
  projectName?: string;
  /** Footer: confidentiality line. */
  confidential?: string;
  /** Footer: centered footnote/source line. */
  note?: React.ReactNode;
  /** Footer: section page-tabs. */
  sectionTabs?: FooterTab[];
  /** Footer: active section `n`. */
  activeTab?: string | number;
  /** Footer: active section name (shown in navy banner). */
  activeLabel?: string;
  /** Footer: page number, bottom-right. */
  pageNumber?: string | number;
  /** Footer: target-company logo bottom-right (image URL). Falls back to the
   *  mandatory yellow placeholder when omitted. */
  targetLogoSrc?: string;
  targetLogoAlt?: string;
  /** Show the footer target-logo slot / placeholder (default true). */
  showFooterTargetLogo?: boolean;

  /** Divider only: full-bleed background image URL. */
  backgroundSrc?: string;
  /** Divider only: large section number. */
  sectionNumber?: string | number;
  /** Cover only: full-bleed image URL (falls back to a deal-themed gradient). */
  coverImageSrc?: string;
  /** Cover only: centered serif cover title (e.g. "Project X – Information Memorandum"). */
  coverTitle?: React.ReactNode;
  /** Cover only: date line (e.g. "October 2025"). */
  coverDate?: string;
  /** Divider ToC panel: [{num,label}] rendered as a frosted panel, active highlighted. */
  sections?: { num: string | number; label: string }[];
  /** Divider ToC panel: which section num is active. */
  activeSection?: string | number;

  className?: string;
  style?: React.CSSProperties;
}

export function SlideFrame(props: SlideFrameProps): JSX.Element;
