import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <div className="project-section-main" id="projects">
      <motion.h1
        className="section-heading"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Projects
      </motion.h1>
    </div>
  );
};

export default ProjectSection;
