import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import contentEn from "./../languages/language-en.json";
import contentEs from "./../languages/language-es.json";
import ThemeSwitch from "./ThemeSwitchComponent";
import blackLogo from "./../../public/juanegomez-logo-black.png";

const HeaderComponent = ({
  darkMode,
  toggleTheme,
  language,
  toggleLanguage,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Definición de los elementos de navegación según el idioma
  const navItems = [
    { id: "home", label: language === "en" ? contentEn.home : contentEs.home },
    {
      id: "about",
      label: language === "en" ? contentEn.about : contentEs.about,
    },
    {
      id: "projects",
      label: language === "en" ? contentEn.projects : contentEs.projects,
    },
    {
      id: "skills",
      label: language === "en" ? contentEn.skills : contentEs.skills,
    },
    {
      id: "contact",
      label: language === "en" ? contentEn.contact : contentEs.contact,
    },
  ];

  const languageOptions = [
    { id: "en", label: "🇺🇸 EN" },
    {
      id: "es",
      label: "🇪🇸 ES",
    },
  ];

  const handleLanguageSelect = (lang) => {
    toggleLanguage(lang);
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      className={darkMode ? "dark-mode" : "light-mode"}
      sx={{
        backgroundColor: darkMode
          ? "var(--color-appbar-dark)"
          : "var(--color-appbar-light)",
        color: darkMode ? "#ffffff" : "#00ABE4",
      }}
    >
      <Toolbar>
        <Box
          component="img"
          src={blackLogo}
          alt="Logo"
          sx={{ width: 40, height: 40, marginRight: 2 }}
        />
        {isMobile ? (
          <IconButton color="inherit" edge="start" onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
        ) : null}
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          {navItems.map((item) => (
            <Button key={item.id} color="inherit">
              <Typography
                variant="body1"
                sx={{ fontFamily: "inherit", textTransform: "none" }}
              >
                {item.label}
              </Typography>
            </Button>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ThemeSwitch checked={darkMode} onChange={toggleTheme} />
          <Button
            color="inherit"
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{ ml: 1 }}
          >
            {languageOptions.find((opt) => opt.id === language)?.flag}{" "}
            {languageOptions.find((opt) => opt.id === language)?.label}
          </Button>
        </Box>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{ mt: 4 }}
        >
          {languageOptions.map((option) => (
            <MenuItem
              key={option.id}
              onClick={() => handleLanguageSelect(option.id)}
            >
              {option.flag} {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
