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
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <ScrambleComponent text="Full Stack Developer" />
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <ScrambleComponent text="MERN Stack" />
      </motion.p>
    </div>
  );
};

export default MainSection;
