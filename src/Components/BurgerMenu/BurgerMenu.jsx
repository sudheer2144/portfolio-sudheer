import React, { useRef, useState } from "react";
import "./styles.css";
import { AnimatePresence, motion } from "framer-motion";

const BurgerMenuComponent = ({ logoutHandleClick, isLoading }) => {
  const burgerMenuRef = useRef();
  const [showPaper, setShowPaper] = useState(false);

  function changeToCross() {
    burgerMenuRef.current.classList.toggle("change");
    setShowPaper(!showPaper);
  }

  return (
    <>
      <div className="burger-menu" ref={burgerMenuRef} onClick={changeToCross}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>
      <AnimatePresence>
        {showPaper && (
          <motion.div
            className="main-paper"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            exit={{ x: 200 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              href="#about"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2 }}
              onClick={changeToCross}
            >
              About
            </motion.a>
            <motion.a
              href="#education"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              onClick={changeToCross}
            >
              Education
            </motion.a>
            <motion.a
              href="#work"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              onClick={changeToCross}
            >
              Work
            </motion.a>
            <motion.a
              href="#projects"
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              onClick={changeToCross}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.8 }}
              onClick={changeToCross}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BurgerMenuComponent;
