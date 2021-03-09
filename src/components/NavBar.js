import 'materialize-css';
import jgLogo from '../images/jglogo.jpeg'

const NavBar = () => {

  return (
    <div className="navbar">
      <img src={jgLogo} alt='jglogo' className='jg' />
      <h3><a href="about">About</a></h3>
      <h3><a href="work">Work</a></h3>
      <h3>Contact</h3>
    </div>
  );
}

export default NavBar;