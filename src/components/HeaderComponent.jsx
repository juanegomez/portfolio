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
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
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
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleLogoClick = () => {
    navigate("/");
  };

  const navItems = [
    { id: "home", label: language === "en" ? contentEn.home : contentEs.home },
    {
      id: "about_me",
      label: language === "en" ? contentEn.about : contentEs.about,
    },
    {
      id: "technologies",
      label:
        language === "en" ? contentEn.technologies : contentEs.technologies,
    },
    {
      id: "projects",
      label: language === "en" ? contentEn.projects : contentEs.projects,
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
        color: darkMode ? "#ffffff" : "#1f1f1f",
      }}
    >
      <Toolbar>
        <IconButton
          onClick={handleLogoClick}
          sx={{ padding: 0, marginRight: 2 }}
        >
          <Box
            component="img"
            src={blackLogo}
            alt="Logo"
            sx={{ width: 40, height: 40 }}
          />
        </IconButton>
        {location.pathname === "/" && isMobile && (
          <IconButton color="inherit" edge="start" onClick={handleNavMenuOpen}>
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }} />
        {location.pathname === "/" && !isMobile && (
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <Button color="inherit" onClick={handleNavMenuClose}>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "inherit", textTransform: "none" }}
                  >
                    {item.label}
                  </Typography>
                </Button>
              </Link>
            ))}
          </Box>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ThemeSwitch checked={darkMode} onChange={toggleTheme} />
          <Button
            color="inherit"
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleLangMenuOpen}
            sx={{ ml: 1 }}
          >
            {languageOptions.find((opt) => opt.id === language)?.label}
          </Button>
        </Box>
        {location.pathname === "/" && (
          <Menu
            id="nav-menu"
            anchorEl={anchorNavEl}
            open={Boolean(anchorNavEl)}
            onClose={handleNavMenuClose}
            sx={{ mt: 4 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <MenuItem onClick={handleNavMenuClose}>{item.label}</MenuItem>
              </Link>
            ))}
          </Menu>
        )}
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
