import { BasicCard } from "@components/card";
import { Box, Grid, Typography } from "@mui/material";

export function Home() {
  // const myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");

  // const body = JSON.stringify({
  //   limit: 10,
  //   offset: 0,
  // });
  // const requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body,
  // };

  // fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(JSON.parse(result)))
  //   .catch((error) => console.error(error));
  return (
    <Box textAlign="center" height={"auto"} minHeight={"90vh"} py={4} px={16}>
      <Typography
        p={4}
        variant="h4"
        color="transparent"
        sx={{
          backgroundImage:
            "linear-gradient(to right, lightgreen, #A5DD9B)",
          backgroundClip: "text",
        }}
        fontSize={60}
        fontWeight={900}
      >
        NextGen Hiring platform
      </Typography>
      <Grid container spacing={8}>
        {[1, 2, 3,4,5,6].map((index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <BasicCard
              key={index}
              title={`Homework App`}
              subheader="Jr Fullstack"
              location="Bangalore, India"
              height={550}
              maxWidth={360}
              cardAction
              btnLabel="⚡ Easy Apply"
              salaryStartRange={10}
              salaryEndRange={15}
              btnOnClick={() => console.log("Button clicked")}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
