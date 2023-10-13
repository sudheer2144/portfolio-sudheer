import React from "react";
import "./style.css";
import ScrambleComponent from "../ScrambleText";
import { motion } from "framer-motion";

const MainSection = () => {
  return (
    <div
      className="main-section"
      //   initial={{ x: -100 }}
      //   whileInView={{ x: 0 }}
      //   transition={{ duration: 1 }}
      //   viewport={{ once: false }}
    >
      <h1>Sudheer Geddadi</h1>
      <motion.p
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <ScrambleComponent text="Full Stack Developer" />
      </motion.p>
      <motion.p
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <ScrambleComponent text="MERN Stack" />
      </motion.p>
    </div>
  );
};

export default MainSection;
