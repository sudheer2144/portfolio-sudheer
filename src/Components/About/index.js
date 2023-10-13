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
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
        repellendus, dolorem sint enim eligendi iusto iure veritatis deleniti
        deserunt aspernatur optio labore, provident sed maiores dolor at non.
        Iusto id error explicabo culpa molestias doloremque, perferendis
        necessitatibus quis. Molestias quis cupiditate neque repudiandae, fugiat
        incidunt nam voluptatum obcaecati blanditiis animi.
      </motion.p>
    </motion.div>
  );
};

export default AboutSection;
