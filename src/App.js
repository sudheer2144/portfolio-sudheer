import "./App.css";
import AboutSection from "./Components/About";
import ContactSection from "./Components/Contact";
import EducationComponent from "./Components/Education";
import FooterSection from "./Components/Footer";
import Header from "./Components/Header";
import MainSection from "./Components/MainSection";
import ProjectSection from "./Components/Projects";
import WorkSection from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <AboutSection />
      <EducationComponent />
      <WorkSection />
      <ProjectSection />
      {/* <ContactSection /> */}
      <FooterSection />
    </div>
  );
}

export default App;
