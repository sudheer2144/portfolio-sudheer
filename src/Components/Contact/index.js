import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="contact-section-main" id="contact">
      <motion.h1
        className="section-heading"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Contact
      </motion.h1>
    </div>
  );
};

export default ContactSection;
