import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/whobutjg" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
      <a href="https://www.linkedin.com/in/josephggiardina/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
    </div>
  );
};

export default footer;
