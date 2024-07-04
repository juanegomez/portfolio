import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  SvgIcon,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import contentEn from "./../../languages/language-en.json";
import contentEs from "./../../languages/language-es.json";
import { mdiGitlab } from "@mdi/js";

const GitLabIcon = (props) => (
  <SvgIcon {...props}>
    <path d={mdiGitlab} />
  </SvgIcon>
);

const AboutMeSectionComponent = ({ darkMode, language }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const email = "juanegomez1022@gmail.com";

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={2}
    >
      <Box
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
        alignItems="left"
        justifyContent="left"
        width="100%"
      >
        <Box
          component="img"
          src="https://juanegomez-bucket.s3.us-west-2.amazonaws.com/portfolio/images/about_me.png"
          alt="About me"
          width={isSmallScreen ? "100%" : "30%"}
          maxHeight={isSmallScreen ? "auto" : "70vh"}
          margin={isSmallScreen ? "0 0 1rem 0" : "0 1rem 0 0"}
          sx={{
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          padding={2}
          width="100%"
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "2rem", textAlign: "center" }}
          >
            {language === "en" ? contentEn.about : contentEs.about}
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            {language === "en"
              ? contentEn.about_me_text_one
              : contentEs.about_me_text_one}
            <br />
            <br />
            {language === "en"
              ? contentEn.about_me_text_two
              : contentEs.about_me_text_two}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {language === "en" ? contentEn.Contact_me : contentEs.Contact_me}
          </Typography>
          <Box
            display="flex"
            justifyContent={isSmallScreen ? "center" : "left"}
            width="100%"
            marginTop={2}
          >
            <Grid
              container
              spacing={2}
              justifyContent={isSmallScreen ? "center" : "left"}
            >
              <Grid item>
                <IconButton
                  href="https://github.com/juanegomez"
                  target="_blank"
                  sx={{
                    width: 50,
                    height: 50,
                    "&:hover .github-icon": {
                      fontSize: 55,
                    },
                  }}
                >
                  <GitHubIcon
                    className="github-icon"
                    sx={{
                      color: darkMode
                        ? "var(--color-github-icon-dark)"
                        : "var(--color-github-icon-light)",
                      fontSize: 50,
                    }}
                  />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton
                  href="https://gitlab.com/juanegomez"
                  target="_blank"
                  sx={{
                    width: 50,
                    height: 50,
                    "&:hover .github-icon": {
                      fontSize: 55,
                    },
                  }}
                >
                  <GitLabIcon
                    className="github-icon"
                    sx={{
                      color: darkMode
                        ? "var(--color-github-icon-dark)"
                        : "var(--color-github-icon-light)",
                      fontSize: 50,
                    }}
                  />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton
                  href="https://linkedin.com/in/juanegomez"
                  target="_blank"
                  sx={{
                    width: 50,
                    height: 50,
                    "&:hover .linkedin-icon": {
                      fontSize: 55,
                    },
                  }}
                >
                  <LinkedInIcon
                    className="linkedin-icon"
                    sx={{
                      color: darkMode
                        ? "var(--color-linkendin-icon-light)"
                        : "var(--color-linkendin-icon-dark)",
                      fontSize: 50,
                    }}
                  />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton
                  href="https://wa.me/573106639327"
                  target="_blank"
                  sx={{
                    width: 50,
                    height: 50,
                    "&:hover .linkedin-icon": {
                      fontSize: 55,
                    },
                  }}
                >
                  <WhatsAppIcon
                    className="linkedin-icon"
                    sx={{
                      color: darkMode
                        ? "var(--color-linkendin-icon-light)"
                        : "var(--color-linkendin-icon-dark)",
                      fontSize: 50,
                    }}
                  />
                </IconButton>
              </Grid>

              <Grid item>
                <IconButton
                  href={`mailto:${email}`}
                  target="_blank"
                  sx={{
                    width: 50,
                    height: 50,
                    "&:hover .linkedin-icon": {
                      fontSize: 55,
                    },
                  }}
                >
                  <EmailIcon
                    className="linkedin-icon"
                    sx={{
                      color: darkMode
                        ? "var(--color-linkendin-icon-light)"
                        : "var(--color-linkendin-icon-dark)",
                      fontSize: 50,
                    }}
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMeSectionComponent;
