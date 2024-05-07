import { Box, Typography } from "@mui/material";
export function Error() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent={"center"}
      height="70vh"
      width="100%"
    >
      <img src="/assets/jobs/error.jpg" width={400} alt="" />
      <Typography fontSize={30} color="red">
        An Error Occured. Please Reload the Page.
      </Typography>
    </Box>
  );
}
