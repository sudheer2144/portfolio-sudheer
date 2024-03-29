import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import BurgerMenuComponent from "../BurgerMenu/BurgerMenu";
import logoLight from "../../Images/logo-light.png";
import logoDark from "../../Images/logo-dark.png";
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";
import { themeContext } from "../../ThemeContext";

const Header = () => {
  const { setTheme } = useContext(themeContext);

  //
  const [ShowNameHeader, setShowNameHeader] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  window.addEventListener("scroll", checkScrollPosition);
  function checkScrollPosition() {
    if (window.scrollY > 200) {
      setShowNameHeader(true);
    } else if (window.scrollY < 200) {
      setShowNameHeader(false);
    }
  }

  function gotoMain() {
    window.location.href = "#main-section";
  }

  function changeMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (!darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("light");
    } else {
      document.documentElement.setAttribute("data-theme", "");
      setTheme("dark");
    }
  }, [darkMode]);

  return (
    <div className="header">
      <div className="details-section" onClick={gotoMain}>
        <motion.div
          className="img-icon"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {darkMode && (
            <img src={logoDark} alt="logo-dark" className="darkmode-img" />
          )}
          {!darkMode && <img src={logoLight} alt="logo-light" />}
        </motion.div>
        <motion.h1
          className={`first-name ${ShowNameHeader && " show-name-header"}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          // ref={nameh1}
        >
          Sudheer<span className="last-name">G</span>
        </motion.h1>
      </div>
      <div className="links-switch-section">
        <motion.div
          className="switch"
          onClick={changeMode}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {darkMode && <BsFillLightbulbFill className="switch-icon" />}
          {!darkMode && <BsFillLightbulbOffFill className="switch-icon" />}
        </motion.div>
        <div className="links-section">
          {/* <motion.a
            href="#main-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Home
          </motion.a> */}
          <motion.a
            href="#about"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            About
          </motion.a>
          {/* <motion.a
            href="#work"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Work
          </motion.a> */}
          <motion.a
            href="#education"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            Education
          </motion.a>
          <motion.a
            href="#projects"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1 }}
          >
            Contact
          </motion.a>
        </div>
        <motion.div
          className="burger-menu-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* <BurgerMenu /> */}
          <BurgerMenuComponent />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
