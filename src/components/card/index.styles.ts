import { CardStyleProps } from "./types";

export const sxStyles = (props: CardStyleProps) => ({
  cardStyles: {
    display: "flex",
    flexDirection: "column",
    minWidth: props.width ? props.width : "100%",
    maxWidth: props.width ? props.width : "100%",
    height: props.height,
    position: props?.position,
    borderRadius: 5,
    pb: 0.5,
    transition: "transform 0.2s",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)",

    ":hover": {
      transform: "scale(1.01)",
    },
  },

  cardHeaderStyles: {
    main: {
      padding: "16px 21px 4px ",
    },
    titleFlexBox: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      color: "#000000de",
    },
    titleBox: { display: "flex", gap: 1, height: "100%" },
    image: { width: 25, height: 40 },
  },

  cardContentStyles: {
    main: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      padding: "0px 21px  4px 21px",
    },
    mainContentBox: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      flexGrow: 1,
    },
    contentBox: {
      textAlign: "start",
      height: 250,
      overflow: "hidden",
      whiteSpace: "pre-wrap",
      maskImage:
        "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
    },
    showMoreBtnBox: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      bottom: 20,
      width: "100%",
    },
  },
  cardActionStyles: {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "0px 21px 16px 21px",
      m: 0,
    },
    btnBox: { gap: 1, display: "flex", flexDirection: "column", width: "100%" },
    avatarBox: { display: "flex", gap: 1, px: 1, position: "relative" },
  },
});
