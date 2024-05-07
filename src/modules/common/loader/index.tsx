import { keyframes } from "@emotion/react";
import { Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { loaderStyles } from "./index.styles";


interface LoaderProps {
  componentLoader?: boolean;
}

export function Loader({ componentLoader }: LoaderProps) {
  return (
    <Box
      minHeight={componentLoader ? "100%" : "0"}
      position={componentLoader ? "sticky" : "fixed"}
      sx={loaderStyles.container}
    >
      <Box sx={loaderStyles.innerContainer}>
        <img src="/logo.png" style={loaderStyles.logo} alt="logo" />
        <Box sx={loaderStyles.progressBarContainer}>
          <LinearProgress
            variant="indeterminate"
            sx={loaderStyles.linearProgress}
          />
        </Box>
      </Box>
    </Box>
  );
}
