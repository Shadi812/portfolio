import React from "react";
import "./Socials.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Socials() {
  return (
    <div className="social-container">
      <a href="https://www.linkedin.com/in/shadi-haggag/" target="__blank">
        <BsLinkedin />
      </a>

      <a href="https://github.com/Shadi812" target="__blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default Socials;
