import { ReactNode } from "react";

export interface CardStyleProps {
  height?: number | string;
  width?: number;
  maxWidth?: number;
  px?: number;
  py?: number;
  position?: "absolute" | "relative" | "fixed";
}

export interface CardComponentProps extends CardStyleProps {
  companyName?: string;
  jobRole?: string;
  jdLink?: string;
  location?: string;
  minJdSalary?: number;
  maxJdSalary?: number;
  jobDetailsFromCompany?: string;
  aboutRole?: string;
  minExp?: string;
  maxExp?: string;
  setShowMoreModalOpen: (state: boolean) => void;
  cardItems?: Array<any>;
  children?: ReactNode;
  logoUrl?: string;
  salaryCurrencyCode?: string;
  cardAction?: boolean;
  btnOnClick?: any;
  btn1Label?: string;
  btn2Label?: string;
  btnDisabled?: boolean;
  btnType?: string;
  postedDate?: string;
  handleViewJobClick?:any;
}
