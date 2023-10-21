import React from "react";
import "./style.css";
import { motion } from "framer-motion";

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
        Self-motivated and hardworking person seeking for an opportunity to work
        in a challenging environment to prove my skills and utilizemy knowledge
        and intelligence in the growth of the organization.
      </motion.p>
    </motion.div>
  );
};

export default AboutSection;
