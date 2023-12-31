import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

const TimelineContent = ({
  reverse = false,
  name = "",
  study = "",
  date = "",
}) => {
  return (
    <>
      {reverse && (
        <motion.div
          className="date"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <p>{date}</p>
        </motion.div>
      )}
      {!reverse && (
        <motion.div
          className="content"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <p className="inst-name">{name}</p>
          <p className="study">{study}</p>
        </motion.div>
      )}
    </>
  );
};

export default TimelineContent;
