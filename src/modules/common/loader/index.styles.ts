import { keyframes } from "@emotion/react";
const breathingAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const loaderStyles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    animation: `${breathingAnimation} 1.5s infinite`,
    overflow: "hidden",
  },
  logo: {
    width: 200
  },
  progressBarContainer: {
    width: "100%",
    marginTop: 1,
    borderRadius: "5px",
    overflow: "hidden",
  },
  linearProgress: {
    ".MuiLinearProgress-bar": { backgroundColor: "#FFFF" },
    ".css-8rzi15-MuiLinearProgress-root": {
      backgroundColor: "#64c956",
    },
  },
};
