import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div className="footer">
      <a href="https://twitter.com/whobutjg" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="3x" />
      </a>
      <a href="https://www.linkedin.com/in/josephggiardina/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
    </div>
  );
};

export default footer;
