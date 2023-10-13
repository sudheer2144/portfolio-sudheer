import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import BurgerMenuComponent from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const [ShowNameHeader, setShowNameHeader] = useState(false);
  window.addEventListener("scroll", checkScrollPosition);
  function checkScrollPosition() {
    if (window.scrollY > 200) {
      setShowNameHeader(true);
    } else if (window.scrollY < 200) {
      setShowNameHeader(false);
    }
  }
  return (
    <div className="header">
      <div className="details-section">
        <motion.div
          className="img-icon"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        ></motion.div>
        <motion.h1
          className={`first-name ${ShowNameHeader && " show-name-header"}`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          // ref={nameh1}
        >
          Sudheer <span className="last-name">G</span>
        </motion.h1>
      </div>
      <div className="links-section">
        <motion.a
          href="#about"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          About
        </motion.a>
        <motion.a
          href="#education"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          Education
        </motion.a>
        <motion.a
          href="#work"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          Work
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
  );
};

export default Header;
