import React from "react";
import { Box, Typography, IconButton, SvgIcon } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { mdiGitlab } from "@mdi/js";
import contentEn from "./../languages/language-en.json";
import contentEs from "./../languages/language-es.json";

const GitLabIcon = (props) => (
  <SvgIcon {...props}>
    <path d={mdiGitlab} />
  </SvgIcon>
);

const FooterComponent = ({ darkMode, language }) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Juan Esteban Gomez.{" "}
        {language === "en"
          ? contentEn.all_rights_reserved
          : contentEs.all_rights_reserved}
      </Typography>
      <Box>
        <IconButton
          color="inherit"
          href="https://wa.me/573106639327"
          disableRipple
          disableFocusRipple
          target="_blank"
          sx={{
            color: darkMode
              ? "var(--color-github-icon-dark)"
              : "var(--color-github-icon-light)",
            "&:hover": {
              transform: "scale(1.2)",
              backgroundColor: "transparent",
            },
          }}
        >
          <WhatsAppIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://github.com/juanegomez"
          disableRipple
          disableFocusRipple
          target="_blank"
          sx={{
            color: darkMode
              ? "var(--color-github-icon-dark)"
              : "var(--color-github-icon-light)",
            "&:hover": {
              transform: "scale(1.2)",
              backgroundColor: "transparent",
            },
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://gitlab.com/juanegomez"
          disableRipple
          disableFocusRipple
          target="_blank"
          sx={{
            color: darkMode
              ? "var(--color-gitlab-icon-dark)"
              : "var(--color-gitlab-icon-light)",
            "&:hover": {
              transform: "scale(1.2)",
              backgroundColor: "transparent",
            },
          }}
        >
          <GitLabIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/in/juanegomez"
          disableRipple
          disableFocusRipple
          target="_blank"
          sx={{
            color: darkMode
              ? "var(--color-linkendin-icon-light)"
              : "var(--color-linkendin-icon-dark)",
            "&:hover": {
              transform: "scale(1.2)",
              backgroundColor: "transparent",
            },
          }}
        >
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};

export default FooterComponent;
