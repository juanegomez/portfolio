import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import aboutImage from "./../../../public/about_me.png";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import contentEn from "./../../languages/language-en.json";
import contentEs from "./../../languages/language-es.json";

const AboutMeSectionComponent = ({ darkMode, language }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
          src={aboutImage}
          alt="About me"
          width={isSmallScreen ? "100%" : "30%"}
          maxHeight={isSmallScreen ? "auto" : "70vh"}
          margin={isSmallScreen ? "0 0 1rem 0" : "0 1rem 0 0"}
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

          <Box
            display="flex"
            alignItems="center"
            paddingBottom={1}
            sx={{ textAlign: isSmallScreen ? "center" : "left" }}
          >
            <EmailIcon sx={{ marginRight: "8px" }} />
            <Typography
              variant="body1"
              sx={{ marginRight: "8px", fontWeight: "bold" }}
            >
              juanes271198@hotmail.com
            </Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            sx={{ textAlign: isSmallScreen ? "center" : "left" }}
          >
            <WhatsAppIcon sx={{ marginRight: "8px" }} />
            <Typography
              variant="body1"
              sx={{ marginRight: "8px", fontWeight: "bold" }}
            >
              +57 310 663 9327
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMeSectionComponent;
