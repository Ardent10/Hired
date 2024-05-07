import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { PrimaryButton } from "../button";
import { Chips } from "../chip";
import { sxStyles } from "./index.styles";
import { CardComponentProps } from "./types";

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
        {props.postedDate && (
          <Box>
            <Chips label="Posted 3 days ago" icon={<> ⏳</>} />
          </Box>
        )}
      </Box>
      <CardHeader
        sx={styles.cardHeaderStyles.main}
        title={
          <Box sx={styles.cardHeaderStyles.titleFlexBox}>
            <Box sx={styles.cardHeaderStyles.titleBox}>
              <img
                src={props.logoUrl}
                style={styles.cardHeaderStyles.image}
                alt="company-logo"
              />
              <Box>
                <Link href={props.jdLink} underline="hover" id="title">
                  <Typography
                    fontSize={14}
                    textAlign={"left"}
                    fontWeight={500}
                    color="#8b8b8b"
                  >
                    {props.companyName}
                  </Typography>
                </Link>
                <Typography
                  variant="subtitle1"
                  fontSize={14}
                  textTransform="capitalize"
                  textAlign={"left"}
                >
                  {props.jobRole}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontSize={11}
                  textAlign="left"
                  textTransform="capitalize"
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
            Estimated Salary: {props.salaryCurrencyCode} {props.minJdSalary}
            {"- " + props.maxJdSalary} LPA ✅
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
                {props.jobDetailsFromCompany}
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
          <Typography fontSize={13}>
            {props.minExp && props.maxExp
              ? `${props.minExp} - ${props.maxExp}`
              : props.minExp
              ? props.minExp
              : props.maxExp
              ? props.maxExp
              : "0"}
            &nbsp; years
          </Typography>
        </Box>

        {props.children}
      </CardContent>
      {props.cardAction && (
        <CardActions sx={styles.cardActionStyles.main}>
          <Box sx={styles.cardActionStyles.btnBox}>
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
                    sx={styles.cardActionStyles.badgeStyles}
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
                    sx={styles.cardActionStyles.badgeStyles}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/assets/cardBtnAvatar/women.jpg"
                      sx={styles.cardActionStyles.avatar}
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
