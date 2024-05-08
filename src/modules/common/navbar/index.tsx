import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, bg: "#FFF" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img src="logo.png" alt="logo" width={100} />
        <IconButton href="https://github.com/Ardent10/Hired">
          <img src="/assets/navbar/github.svg" alt="github" height={40} />
        </IconButton>
      </Toolbar>
    </Box>
  );
}
