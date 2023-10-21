import React, { useContext } from "react";
import "./styles.css";
import { motion } from "framer-motion";
import yblogsLight from "../../project images/yblogs-light.png";
import yblogsDark from "../../project images/yblogs-dark.png";
import podcasts from "../../project images/podcasts.png";
import cryptoZonedark from "../../project images/cryptoZone-dark.png";
import cryptoZoneLight from "../../project images/cryptoZone-light.png";
import { themeContext } from "../../ThemeContext";
import { BiLinkExternal } from "react-icons/bi";

const ProjectSection = () => {
  const { theme } = useContext(themeContext);

  function openProject(projectURL) {
    window.open(projectURL, "_blank");
  }
  return (
    <div className="project-section-main" id="projects">
      <motion.h1
        className="section-heading"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        Projects
      </motion.h1>
      <div className="projects-section">
        <motion.div
          className="project"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <span
            className="external-link-span"
            onClick={() => {
              openProject("https://cryto-zone.vercel.app/");
            }}
          >
            <BiLinkExternal className="external-link-logo" />
          </span>
          <img
            src={theme === "dark" ? cryptoZoneLight : cryptoZonedark}
            alt=""
            className="project-img"
          />
          <p>
            This is a ReactJs based Web Application built to show the top 100
            crypto currencies with their price, increased or decreased
            percentage, total market cap, total volume and a chart representing
            the ups and downs of the currency for the given days. Using realtime
            API.
          </p>
          <p className="stack">
            Frontend: ReactJs, Redux, CSS, Material UI, Framer Motion.
          </p>
        </motion.div>
        <motion.div
          className="project"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <span
            className="external-link-span"
            onClick={() => {
              openProject("https://yblogs.vercel.app/");
            }}
          >
            <BiLinkExternal className="external-link-logo" />
          </span>
          <img
            src={theme === "dark" ? yblogsLight : yblogsDark}
            alt=""
            className="project-img"
          />
          <p>
            This is a Full Stack Web Application created using MERN stack in
            which the users can view blogs and can be updated or deleted by the
            creater of that blog.
          </p>
          <p className="stack">Frontend: ReactJs, Redux, CSS, Framer Motion.</p>
          <p className="stack">Backend: NodeJs, ExpressJs, MongoDB.</p>
        </motion.div>
        <motion.div
          className="project"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <span
            className="external-link-span"
            onClick={() => {
              openProject("https://podcasts-app-iota.vercel.app/");
            }}
          >
            <BiLinkExternal className="external-link-logo" />
          </span>
          <img src={podcasts} alt="" className="project-img" />
          <p>
            A React based Web Application in which user can create, delete, play
            podcasts and the authentication and authorization is performed using
            firebase.
          </p>
          <p className="stack">Frontend: ReactJs, Redux, CSS.</p>
          <p className="stack">Backend: Firebase.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectSection;
