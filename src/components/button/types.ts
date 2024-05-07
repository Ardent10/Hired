import { ReactNode } from "react";



export interface ButtonStyleProps {
  backgroundColor?: string;
  width?: number | string;
  height?: number;
  padding?: string | number;
  fontSize?: number;
  color?: string;
  borderRadius?: string;
  borderNoBgColor?: boolean;
  borderColor?: string;
  textTransform?: string;
  hoverColor?: string;
  hoverBgColor?: string;
  fontWeight?: number;
  className?: string;
}

export interface ButtonProps extends ButtonStyleProps {
  title: string;
  type?: string;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
  buttonChild?: HTMLElement | ReactNode;
  disableElevation?: boolean;
  showLoaderonBtn?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
  variant: "contained" | "outlined" | "text";
}
