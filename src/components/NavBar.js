import "materialize-css";
import jgLogo from "../images/jglogo.jpeg";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={jgLogo} alt="jglogo" className="jg" />
        <h3>
        <Link to="/portfolio">About</Link>
          </h3>
        <h3>
          <Link to="/resume">Resume</Link>
        </h3>
        <h3>
          <a href="https://github.com/whobutjg" target="_blank" rel="noreferrer">Projects</a>
        </h3>
    </div>
  );
};

export default NavBar;
