import { ButtonStyleProps } from "./types";

export const sxStyles = (props: ButtonStyleProps) => ({
  btnStyles: {
    fontSize: props.fontSize ? props.fontSize : 14,
    fontWeight: props.fontWeight ? props.fontWeight : 400,
    textTransform: props.textTransform ? props.textTransform : "none",
    padding: props.padding,
    borderRadius: props.borderRadius ? props.borderRadius : "5px",
    backgroundColor: props.backgroundColor,
    color: props.color ? props.color : "#000",
    ":hover": {
      backgroundColor: props.hoverBgColor ? props.hoverBgColor : "none",
      color: props.hoverColor ? props.hoverColor : "none",
    },
  },
  progressStyles: {
    color: props.color ? props.color : "#FFF",
  },
});
