import "materialize-css";
import jgLogo from "../images/jglogo.jpeg";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={jgLogo} alt="jglogo" className="jg" />
        <h3>
          <NavLink to="/resume">Resume</NavLink>
        </h3>
        <h3>
          <a href="https://github.com/whobutjg">Projects</a>
        </h3>
        <h3>Contact</h3>
    </div>
  );
};

export default NavBar;
