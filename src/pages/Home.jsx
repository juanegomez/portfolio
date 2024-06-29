import React, { useState } from "react";
import HeaderComponent from "./../components/HeaderComponent";
import HomeSectionComponent from "./../components/sections/HomeSectionComponent";
import AboutMeSectionComponent from "../components/sections/AboutMeSectionComponent";
import TechnologiesSectionComponent from "../components/sections/TechnologiesSectionComponent";
import ProjectsSectionComponent from "../components/sections/ProjectsSectionComponent";
import ContactSectionComponent from "../components/sections/ContactSectionComponent";

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
          <section id="about_me">
            <AboutMeSectionComponent darkMode={darkMode} language={language} />
          </section>
          <section id="technologies">
            <TechnologiesSectionComponent
              darkMode={darkMode}
              language={language}
            />
          </section>
          <section id="projects">
            <ProjectsSectionComponent darkMode={darkMode} language={language} />
          </section>
          <section id="contact">
            <ContactSectionComponent darkMode={darkMode} language={language} />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
