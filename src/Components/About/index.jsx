import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import javaLogo from "../../Images/logos/java.svg";
import springLogo from "../../Images/logos/spring.svg";
import reactLogo from "../../Images/logos/reactjs.svg";
import nodejsLogo from "../../Images/logos/nodejs.svg";
import mongodbLogo from "../../Images/logos/mongodb.svg";
import sqlLogo from "../../Images/logos/mysql.svg";

import allDetails from "../../All-Details-Object";

const AboutSection = () => {
  return (
    <motion.div
      className="about-section"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="section-heading"
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        About
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {allDetails.about}
      </motion.p>
      <div className="glogos-section">
        <img src={javaLogo} alt="" className="glogo" />
        <img src={springLogo} alt="" className="glogo" />
        <img src={reactLogo} alt="" className="glogo" />
        <img src={nodejsLogo} alt="" className="glogo" />
        <img src={mongodbLogo} alt="" className="glogo" />
        <img src={sqlLogo} alt="" className="glogo" />
      </div>
    </motion.div>
  );
};

export default AboutSection;
