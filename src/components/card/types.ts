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
  title?: string;
  subheader: string;
  location?: string;
  salaryStartRange?: number;
  salaryEndRange?: number;
  aboutCompany?: string;
  aboutRole?: string;
  minExperience?: string;
  setShowMoreModalOpen: (state: boolean) => void;
  cardItems?: Array<any>;
  children?: ReactNode;

  cardAction?: boolean;

  btnOnClick?: any;
  btn1Label?: string;
  btn2Label?: string;
  btnDisabled?: boolean;
  btnType?: string;
}
