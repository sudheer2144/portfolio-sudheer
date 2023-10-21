import React from "react";
import "./styles.css";
import TimelineContent from "./TimelineContent";
import TimelineDate from "./TimelineDate";
import { motion } from "framer-motion";

const Timeline = ({ reverse = false }) => {
  return (
    <div className="main-container">
      {/*  */}
      {/* straight line in the middle */}
      <motion.div
        className="straight-line"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      ></motion.div>
      {/*  */}
      {/* content */}
      <div className="content-section">
        <TimelineContent
          name="Pondicherry Engineering College"
          study="Bachelor of Technology in Computer Science Engineering - 6.7 CGPA"
        />
        <TimelineContent reverse={true} date="2014-2017" />
        <TimelineContent
          name="Rajiv Gandhi Government English MediumHigh School"
          study="10th Class - 8.7 CGPA"
        />
      </div>
      {/*  */}
      {/* no of dots */}
      <div className="line-circles">
        <motion.div
          className="circle"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        ></motion.div>
        <motion.div
          className="circle"
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        ></motion.div>
        <motion.div
          className="circle"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        ></motion.div>
      </div>
      {/*  */}
      {/* dates */}
      <div className="date-section">
        <TimelineDate date="2017-2021" />
        <TimelineDate
          reverse={true}
          name="Dr B R Ambedkar Polytechnic College"
          study="Diploma in Computer Engineering - 91%"
        />
        <TimelineDate date="2013-2014" />
      </div>
      {/*  */}
    </div>
  );
};

export default Timeline;
