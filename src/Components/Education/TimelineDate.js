import React from "react";
import "./styles.css";
import { motion } from "framer-motion";

const TimelineDate = ({
  reverse = false,
  study = "",
  name = "",
  date = "",
}) => {
  return (
    <>
      {!reverse && (
        <motion.div
          className="date"
          initial={{ x: 10 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          {date}
        </motion.div>
      )}
      {reverse && (
        <motion.div
          className="content"
          initial={{ x: 10 }}
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

export default TimelineDate;
