import React from "react";
import HomeSectionComponent from "./../components/sections/HomeSectionComponent";
import AboutMeSectionComponent from "../components/sections/AboutMeSectionComponent";
import TechnologiesSectionComponent from "../components/sections/TechnologiesSectionComponent";
import ProjectsSectionComponent from "../components/sections/ProjectsSectionComponent";
import ContactSectionComponent from "../components/sections/ContactSectionComponent";
import FooterComponent from "../components/FooterComponent";
import { useTheme } from "./../contexts/ThemeContext";
import { useLanguage } from "./../contexts/LanguageContext";

const Home = () => {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <>
      <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
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
        <FooterComponent darkMode={darkMode} language={language} />
      </div>
    </>
  );
};

export default Home;
