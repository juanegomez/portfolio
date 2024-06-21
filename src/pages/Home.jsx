import React, { useState } from "react";
import HeaderComponent from "./../components/HeaderComponent";
import HomeSectionComponent from "./../components/sections/HomeSectionComponent";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("es");

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <>
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
        <HeaderComponent
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        <main>
          <section id="home">
            <HomeSectionComponent darkMode={darkMode} language={language} />
          </section>
          <section id="about">About Content</section>
          <section id="projects">Projects Content</section>
          <section id="skills">Skills Content</section>
          <section id="contact">Contact Content</section>
        </main>
      </div>
    </>
  );
};

export default Home;
