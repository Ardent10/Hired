import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import { PrimaryButton } from "../button";
import { ReactNode } from "react";
import { Chips } from "../chip";

interface props {
  title?: string;
  subheader: string;
  location?: string;
  salaryStartRange?: number;
  salaryEndRange?: number;
  aboutCompany?: string;
  aboutRole?: string;
  minExperience?: string;

  height?: number | string;
  width?: number;
  maxWidth?: number;

  cardItems?: Array<any>;
  children?: ReactNode;

  px?: number;
  py?: number;

  position?: "absolute" | "relative" | "fixed";
  cardAction?: boolean;

  btnOnClick?: any;
  btnLabel?: string;
  btnDisabled?: boolean;
  btnType?: string;
}

export function BasicCard(props: props) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: props.width ? props.width : "100%",
        maxWidth: props.width ? props.width : "100%",
        height: props.height,
        position: props?.position,
        borderRadius: 5,
        pb: 1,
        transition: "transform 0.2s",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",

        ":hover": {
          transform: "scale(1.01)",
        },
      }}
    >
      <Box px={2} pt={3}>
        <Chips label="Posted 3 days ago" icon={<> ⏳</>} />
      </Box>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="card-header">
            {props.title?.charAt(0)}
          </Avatar>
        }
        title={
          <Link href="#" underline="hover" id="title">
            <Typography
              fontSize={13}
              textAlign={"left"}
              fontWeight={600}
              color="#8b8b8b"
            >
              {props.title}
            </Typography>
          </Link>
        }
        subheader={
          <Box display="flex" flexDirection={"column"} textAlign={"left"}>
            <Typography variant="subtitle1" fontSize={14} textAlign={"left"}>
              {props.subheader}
            </Typography>
            <Typography variant="subtitle2" fontSize={11} textAlign={"left"}>
              {props.location}
            </Typography>
          </Box>
        }
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"start"}
          flexGrow={1}
        >
          <Typography
            fontSize={14}
            fontWeight={500}
            color="#4d596a"
            gutterBottom
          >
            Estimated Salary: ₹ {props.salaryStartRange} -{" "}
            {props.salaryEndRange} LPA ✅
          </Typography>
          <Box textAlign="start" height={250} overflow="hidden">
            <Box id="about-company">
              <Typography fontSize={16} fontWeight={500}>
                About Company
              </Typography>
              <Typography fontSize={14}>
                {props.aboutCompany} Sciera, Inc. helps enterprises transform
                Big Data into actionable insights -- and insights into business
                success. Sciera accomplishes this through customized data
                acquisition, analytics, modeling, and scoring products and
                processes. Sciera's clients benefit from a series of
                industry-specific as well as horizontal solutions meant to
                address specific needs. Clients in the cable TV and deregulated
                utility industries can address the age-old problem of Churn and
                increase Market Share with Sciera's RealWatch data and
                industry-specific FlowShare management.
              </Typography>
            </Box>
            <Box id="about-role">
              <Typography fontSize={16} fontWeight={500}>
                About Role
              </Typography>
              <Typography fontSize={14}>{props.aboutRole}</Typography>
            </Box>
          </Box>
          <Box>
            <PrimaryButton title="Show More" variant="text" />
          </Box>

          <Box id="min-experience" textAlign="start">
            <Typography fontSize={16} fontWeight={500} color="#8b8b8b">
              Minimum Experience
            </Typography>
            <Typography>{props.minExperience}1 years</Typography>
          </Box>
        </Box>

        {props.children}
      </CardContent>
      {props.cardAction && (
        <CardActions sx={{ display: "flex", px: 2 }}>
          <PrimaryButton
            variant="contained"
            title={props?.btnLabel ? props.btnLabel : ""}
            borderColor="1px solid #8a89fa"
            borderRadius="8px"
            padding={"8px 18px"}
            backgroundColor="#55efc4"
            fontSize={12}
            fontWeight={500}
            width={110}
            height={30}
            disableElevation
            onClick={props.btnOnClick}
            disabled={props.btnDisabled}
          />
        </CardActions>
      )}
    </Card>
  );
}
