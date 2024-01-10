import { useState } from "react";
import "./App.css";
import AboutSection from "./Components/About";
import EducationComponent from "./Components/Education";
import FooterSection from "./Components/Footer";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import ProjectSection from "./Components/Projects";
import WorkSection from "./Components/Work";
import { themeContext } from "./ThemeContext";

function App() {
  const [theme, setTheme] = useState("theme");

  return (
    <themeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div className="App">
        <Header />
        <MainSection />
        <AboutSection />
        {/* <WorkSection /> */}
        <EducationComponent />
        <ProjectSection />
        <FooterSection />
      </div>
    </themeContext.Provider>
  );
}

export default App;
