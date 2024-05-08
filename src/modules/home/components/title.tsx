import { Typography } from "@mui/material";

export function JobPageTitle(){
  return (
    <Typography
      p={2}
      variant="h4"
      color="transparent"
      sx={{
        backgroundImage: "linear-gradient(to right, #54efc3, #A5DD9B)",
        backgroundClip: "text",
      }}
      fontSize={60}
      fontWeight={900}
    >
      NextGen Hiring platform
    </Typography>
  );
}