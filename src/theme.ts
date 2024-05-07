import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: "Lexend,Roboto,Poppins,sans-serif !important",
    fontSize: 14,
    fontWeightBold: 400,
    fontWeightRegular: 300,
  },
  palette: {
    primary: {
      main: "#FFFFE",
    },
    secondary: {
      main: "#8a89fa",
    },
  },
});

export default theme;
