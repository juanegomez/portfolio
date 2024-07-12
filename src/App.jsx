import RouteComponent from "./routes/RouteComponent";
import "./App.css";
import { useTheme } from "./contexts/ThemeContext";
import { useLanguage } from "./contexts/LanguageContext";
import HeaderComponent from "./components/HeaderComponent";

const App = () => {
  const { darkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      <RouteComponent />
      <HeaderComponent
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
      />
    </>
  );
};

export default App;
