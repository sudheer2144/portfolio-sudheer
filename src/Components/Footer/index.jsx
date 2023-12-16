import React from "react";
import "./styles.css";
import { BiHeart } from "react-icons/bi";

const FooterSection = () => {
  return (
    <div className="footer-section" id="contact">
      {/* <div className="footer-links-section">
        <a href="https://github.com/sudheer2144" target="_blank">
          <span className="effect"></span>
          Github
        </a>
        <a href="https://www.linkedin.com/in/sudheer-geddadi" target="_blank">
          <span className="effect"></span>
          LinkedIN
        </a>
        <a href="https://leetcode.com/sudheer2144/" target="_blank">
          <span className="effect"></span>
          Leetcode
        </a>
      </div> */}
      <div className="mail-section">
        <p className="mail-address">
          Email:{" "}
          <span className="mail">
            sudheer.ged<span className="symb">@</span>mail.com
          </span>
        </p>
        <p className="phone">
          Phone:{" "}
          <span className="pnone-num">
            <span className="symb">+91</span>9989835953
          </span>
        </p>
      </div>
      <p>Made with {<BiHeart />} By Sudheer</p>
    </div>
  );
};

export default FooterSection;
