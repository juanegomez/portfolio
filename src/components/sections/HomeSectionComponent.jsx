import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import GetAppIcon from "@mui/icons-material/GetApp";
import JuanegomezImage from "./../../../public/juanegomez.png";
import contentEn from "./../../languages/language-en.json";
import contentEs from "./../../languages/language-es.json";
import Typewriter from "typewriter-effect";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: theme.spacing(2),
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 0,
  },
}));

const Info = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    textAlign: "center",
  },
}));

const Buttons = styled(Grid)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(45),
  height: theme.spacing(45),
  borderRadius: "50%",
  border: "1px solid #121212",
  marginLeft: theme.spacing(10),
  [theme.breakpoints.down("md")]: {
    order: -1,
    alignSelf: "left",
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(0),
    width: theme.spacing(35),
    height: theme.spacing(35),
  },
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const HomeSectionComponent = ({ darkMode, language }) => {
  return (
    <Container>
      <Info>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Juan Esteban Gómez
        </Typography>

        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Frontend Developer",
                "Backend Developer",
              ],
              autoStart: true,
              loop: true,
              cursor: "<",
            }}
          />
        </div>

        <br />
        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
          👋🏼{" "}
          {language === "en"
            ? contentEn.home_description_one
            : contentEs.home_description_one}
          <br />
          <br />
          🧑🏻‍💻{" "}
          {language === "en"
            ? contentEn.home_description_two
            : contentEs.home_description_two}
        </Typography>

        <Buttons container>
          <Grid item>
            <Button
              variant="contained"
              href="https://juanegomez-bucket.s3.us-west-2.amazonaws.com/Juan_Gomez_cv.pdf"
              target="_blank"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                padding: "12px 10px",
                fontSize: "1rem",
                backgroundColor: darkMode
                  ? "var(--color-cv-button-dark)"
                  : "var(--color-cv-button-light)",
                color: darkMode
                  ? "var(--color-cv-button-text-dark)"
                  : "var(--color-cv-button-text-light)",
                border: `2px solid ${
                  darkMode
                    ? "var(--color-cv-button-border-dark)"
                    : "var(--color-cv-button-border-light)"
                }`,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: darkMode
                    ? "var(--color-cv-button-dark)"
                    : "var(--color-cv-button-light)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <GetAppIcon
                sx={{
                  fontSize: "1.5rem",
                  color: darkMode
                    ? "var(--color-cv-button-light)"
                    : "var(--color-cv-button-dark)",
                }}
              />
              {language === "en"
                ? contentEn.download_cv
                : contentEs.download_cv}
            </Button>
          </Grid>
        </Buttons>
      </Info>
      <CustomAvatar src={JuanegomezImage} alt="Juan Esteban Gómez" />
    </Container>
  );
};

export default HomeSectionComponent;
