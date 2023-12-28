import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

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
        Software Engineer (Full Stack)
      </motion.p>
      <p className="comp">
        MEDIA WAVE TECHNOLOGIES<span>{"[Aug-2021 to Present]"}</span>
      </p>
      <motion.div
        className="line-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <p className="lines">
          -{">"} 2.4 Years hands on experience as Full Stack Developer
        </p>
        <p className="lines">
          -{">"} Hands on experience on ReactJs based UI development
        </p>
        <p className="lines">
          -{">"} Hands on experience on Java based server-side development with
          Spring Boot
        </p>
        <p className="lines">
          -{">"} Hands on experience on Server-side Database Management with
          MySQLWorkbench.
        </p>
      </motion.div>
    </div>
  );
};

export default WorkSection;
