import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

import allDetails from "../../All-Details-Object";

const WorkSection = () => {
  return (
    <div className="work-section" id="work">
      <motion.h1
        className="section-heading"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Work
      </motion.h1>
      <div className="container">
        <div className="line"></div>
      </div>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="tagline"
      >
        {allDetails.work.role}
      </motion.p>
      <p className="comp">
        {allDetails.work.company}
        <span>{allDetails.work.duration}</span>
      </p>
      <motion.div
        className="line-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <p className="lines">{allDetails.work.points.p1}</p>
        <p className="lines">{allDetails.work.points.p2}</p>
        <p className="lines">{allDetails.work.points.p3}</p>
        <p className="lines">{allDetails.work.points.p4}</p>
      </motion.div>
    </div>
  );
};

export default WorkSection;
