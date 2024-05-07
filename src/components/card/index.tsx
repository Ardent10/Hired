import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import { PrimaryButton } from "../button";
import { Chips } from "../chip";
import { CardComponentProps } from "./types";
import { sxStyles } from "./index.styles";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#00ffa3",
    color: "#00ffa3",
    position: "absolute",
    bottom: "8px",
    right: "8px",

    "&::after": {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      content: '""',
    },
  },
}));

export function BasicCard(props: CardComponentProps) {
  const styles = sxStyles(props);
  function handleClick() {
    props.setShowMoreModalOpen(true);
  }

  return (
    <Card sx={styles.cardStyles}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        px={2}
        pt={3}
      >
        <Box>
          <Chips label="Posted 3 days ago" icon={<> ⏳</>} />
        </Box>
      </Box>
      <CardHeader
        sx={styles.cardHeaderStyles.main}
        title={
          <Box sx={styles.cardHeaderStyles.titleFlexBox}>
            <Box sx={styles.cardHeaderStyles.titleBox}>
              <img
                src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713945551803_bjb8u.jpg"
                style={styles.cardHeaderStyles.image}
                alt="company-logo"
              />
              <Box>
                <Link href="#" underline="hover" id="title">
                  <Typography
                    fontSize={14}
                    textAlign={"left"}
                    fontWeight={500}
                    color="#8b8b8b"
                  >
                    {props.title}
                  </Typography>
                </Link>
                <Typography
                  variant="subtitle1"
                  fontSize={14}
                  textAlign={"left"}
                >
                  {props.subheader}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontSize={11}
                  textAlign={"left"}
                >
                  {props.location}
                </Typography>
              </Box>
            </Box>
          </Box>
        }
      />

      <CardContent sx={styles.cardContentStyles.main}>
        <Box sx={styles.cardContentStyles.mainContentBox}>
          <Typography fontSize={14} color="#4d596a" gutterBottom>
            Estimated Salary: ₹ {props.salaryStartRange} -{" "}
            {props.salaryEndRange} LPA ✅
          </Typography>
          <Box sx={styles.cardContentStyles.contentBox}>
            <Box id="about-company">
              <Typography fontSize={16} fontWeight={400}>
                About Company:
              </Typography>
              <Typography fontSize={14} fontWeight={500}>
                About us
              </Typography>
              <Typography fontSize={14}>
                {props.aboutCompany}
                Feufo specializes in temporary, permanent, contract, and remote
                staffing across healthcare, manufacturing, IT, finance, and oil
                & gas industries. We offer tailored solutions for short-term
                projects, full-time positions, executive searches, and
                international staffing needs. Whether you need temporary
                workers, high-level executives, or remote talent, Feufo ensures
                efficient and effective staffing solutions to meet your business
                requirements.
              </Typography>
            </Box>
            <Box id="about-role">
              <Typography fontSize={16} fontWeight={500}>
                About Role
              </Typography>
              <Typography fontSize={14}>{props.aboutRole}</Typography>
            </Box>
          </Box>
          <Box sx={styles.cardContentStyles.showMoreBtnBox}>
            <PrimaryButton
              title="View job"
              variant="text"
              color="#4943da"
              fontSize={14}
              fontWeight={300}
              onClick={handleClick}
            />
            <Link href="#" underline="hover" />
          </Box>
        </Box>
        <Box id="min-experience" textAlign="start" mb={1}>
          <Typography fontSize={13} fontWeight={500} color="#8b8b8b">
            Minimum Experience
          </Typography>
          <Typography fontSize={13}>{props.minExperience}1 years</Typography>
        </Box>

        {props.children}
      </CardContent>
      {props.cardAction && (
        <CardActions sx={styles.cardActionStyles}>
          <Box gap={1} display="flex" flexDirection="column" width={"100%"}>
            <PrimaryButton
              title={props.btn1Label ? props.btn1Label : ""}
              variant="contained"
              borderRadius="8px"
              padding="8px 18px"
              color="#000"
              backgroundColor="#55efc4"
              hoverBgColor="#00b894"
              hoverColor="#fff"
              fontSize={16}
              fontWeight={400}
              width={110}
              height={30}
              disableElevation
              onClick={props.btnOnClick}
              disabled={props.btnDisabled}
            />
            <PrimaryButton
              title={props.btn2Label ? props.btn2Label : ""}
              variant="contained"
              borderRadius="8px"
              padding="8px 18px"
              color="#FFF"
              backgroundColor="#4943da"
              hoverBgColor="#716bff"
              hoverColor="#fff"
              fontSize={16}
              fontWeight={300}
              width={110}
              height={30}
              disableElevation
              onClick={props.btnOnClick}
              disabled={props.btnDisabled}
              buttonChild={
                <Box sx={styles.cardActionStyles.avatarBox}>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                    sx={{ filter: "blur(2px)" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/assets/cardBtnAvatar/man.jpg"
                      sx={{ height: "30px", width: "30px" }}
                    />
                  </StyledBadge>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                    sx={{ filter: "blur(2px)" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/assets/cardBtnAvatar/women.jpg"
                      sx={{ height: "30px", width: "30px" }}
                    />
                  </StyledBadge>
                </Box>
              }
            />
          </Box>
        </CardActions>
      )}
    </Card>
  );
}
//  <Badge
//    anchorOrigin={{
//      vertical: "bottom",
//      horizontal: "right",
//    }}
//    sx={{ mr: 1, color: "green" }}
//    color="secondary"
//    badgeContent=" "
//    variant="dot"
//  >
//    <Avatar
//      sx={{ width: 24, height: 24 }}
//      alt="Remy Sharp"
//      src="/static/images/avatar/1.jpg"
//      sizes="small"
//    />
//  </Badge>;
