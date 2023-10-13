import React from "react";
import "./styles.css";
import Timeline from "./Timeline";
import { motion } from "framer-motion";

const EducationComponent = () => {
  return (
    <div className="edu-container" id="education">
      <motion.h1
        className="section-heading"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Education
      </motion.h1>
      <Timeline />
      {/* <TimelineDetails />
      <TimelineDetails reverse={true}/>
      <TimelineDetails /> */}
    </div>
  );
};

export default EducationComponent;
