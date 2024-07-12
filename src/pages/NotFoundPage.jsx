import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "./../contexts/ThemeContext";
import { useLanguage } from "./../contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import FooterComponent from "./../components/FooterComponent";
import contentEn from "./../languages/language-en.json";
import contentEs from "./../languages/language-es.json";

const NotFoundPage = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          404
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          {language === "en"
            ? contentEn.page_not_found
            : contentEs.page_not_found}
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            fontSize: "1rem",
            fontWeight: "bold",
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
            "&.Mui-disabled": {
              backgroundColor: darkMode
                ? "var(--color-cv-button-dark)"
                : "var(--color-cv-button-light)",
              color: darkMode
                ? "var(--color-cv-button-text-dark)"
                : "var(--color-cv-button-text-light)",
            },
          }}
          onClick={handleGoHome}
        >
          {language === "en" ? contentEn.go_home : contentEs.go_home}
        </Button>
      </Box>
      <FooterComponent darkMode={darkMode} language={language} />
    </Box>
  );
};

export default NotFoundPage;
