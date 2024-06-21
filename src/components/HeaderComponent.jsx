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
  const [anchorNavEl, setAnchorNavEl] = useState(null);
  const [anchorLangEl, setAnchorLangEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavMenuOpen = (event) => {
    setAnchorNavEl(event.currentTarget);
  };

  const handleNavMenuClose = () => {
    setAnchorNavEl(null);
  };

  const handleLangMenuOpen = (event) => {
    setAnchorLangEl(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setAnchorLangEl(null);
  };

  const handleLanguageSelect = (lang) => {
    toggleLanguage(lang);
    handleLangMenuClose();
  };

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
    { id: "es", label: "🇪🇸 ES" },
  ];

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
          <IconButton color="inherit" edge="start" onClick={handleNavMenuOpen}>
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
            onClick={handleLangMenuOpen}
            sx={{ ml: 1 }}
          >
            {languageOptions.find((opt) => opt.id === language)?.flag}{" "}
            {languageOptions.find((opt) => opt.id === language)?.label}
          </Button>
        </Box>
        <Menu
          id="nav-menu"
          anchorEl={anchorNavEl}
          open={Boolean(anchorNavEl)}
          onClose={handleNavMenuClose}
          sx={{ mt: 4 }}
        >
          {navItems.map((item) => (
            <MenuItem key={item.id} onClick={handleNavMenuClose}>
              {item.label}
            </MenuItem>
          ))}
        </Menu>
        <Menu
          id="language-menu"
          anchorEl={anchorLangEl}
          open={Boolean(anchorLangEl)}
          onClose={handleLangMenuClose}
          sx={{ mt: 4 }}
        >
          {languageOptions.map((option) => (
            <MenuItem
              key={option.id}
              onClick={() => handleLanguageSelect(option.id)}
            >
              {option.label}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
