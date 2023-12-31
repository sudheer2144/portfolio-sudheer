import React from "react";
import "./style.css";
import ScrambleComponent from "../ScrambleText";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import resumeImage from "../../Images/image.png";

import allDetails from "../../All-Details-Object";

const MainSection = () => {
  return (
    <div className="main-section" id="main-section">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {allDetails.personalDetails.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <ScrambleComponent text={allDetails.personalDetails.desig} />
      </motion.p>
      <div className="profiles-links-section">
        <motion.a
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          href={allDetails.personalDetails.socialLinks.github}
          target="_blank"
        >
          <BsGithub className="logos" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          href={allDetails.personalDetails.socialLinks.linkedin}
          target="_blank"
        >
          <BsLinkedin className="logos" />
        </motion.a>
        <motion.a
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          href={allDetails.personalDetails.socialLinks.leetcode}
          target="_blank"
        >
          <SiLeetcode className="logos" />
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="resume-img-div"
      >
        <img src={resumeImage} alt="" className="resume-img" />
        <span className="external-link-span">
          <BiLinkExternal className="external-link-logo" />
        </span>
      </motion.div>
    </div>
  );
};

export default MainSection;
