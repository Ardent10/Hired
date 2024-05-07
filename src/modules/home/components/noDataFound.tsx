import { Box, Typography } from "@mui/material";
export function NoDataFound() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="70vh"
      justifyContent='center'
      width="100%"
    >
      <img src="/assets/jobs/empty.jpg" width={400} alt="" />
      <Typography fontSize={30} color="red">
        No jobs found.
      </Typography>
    </Box>
  );
}
