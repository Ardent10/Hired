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
        minWidth: props.width ? props.width : "100%",
        maxWidth: props.width ? props.width : "100%",
        height: props.height,
        position: props?.position,
        borderRadius: 5,
        pb: 1,
        transition: "transform 0.2s",

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
            R
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

      <CardContent>
        <Box display="flex" flexDirection={"column"} alignItems={"start"}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 500, color: "#4d596a" }}
            gutterBottom
          >
            Estimated Salary: ₹ {props.salaryStartRange} -{" "}
            {props.salaryEndRange} LPA ✅
          </Typography>
          <Box id="about-company">
            <Typography sx={{ fontSize: 22, fontWeight: 500 }} gutterBottom>
              About Company
            </Typography>
            <Typography sx={{ fontSize: 22, fontWeight: 500 }} gutterBottom>
              {props.aboutCompany}
            </Typography>
          </Box>
          <Box id="about-role">
            <Typography sx={{ fontSize: 22, fontWeight: 500 }} gutterBottom>
              About Role
            </Typography>
            <Typography sx={{ fontSize: 22, fontWeight: 500 }} gutterBottom>
              {props.aboutRole}
            </Typography>
          </Box>
        </Box>

        {props.children}
      </CardContent>
      {props.cardAction && (
        <CardActions>
          <PrimaryButton
            variant="contained"
            title={props?.btnLabel ? props.btnLabel : ""}
            type={props.btnType}
            borderColor="1px solid #8a89fa"
            borderRadius="8px"
            padding={"8px 18px"}
            backgroundColor="#8a89fa"
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
