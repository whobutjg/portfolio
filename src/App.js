/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import NavBar from "./components/NavBar";
import gaLogo from "./images/dlf.pt-25-png-2777875.png";
import cheqmate from "./images/cheqmate_home.png";
import fido from "./images/fidos_hotel.png";

function App() {
  return (
    <>
      <NavBar />
      <div>
        <div className="about">
          <h3>
            I'm Joseph 'Joey' Giardina, a{" "}
            <a
              href="https://github.com/whobutjg"
              alt="github"
              target="_blank"
              className="github"
            >
              Full-Stack Software Engineer
            </a>{" "}
            based in the NYC metropolitan area. Want to connect, learn more
            about me, or see how we can collaborate? Let's Talk.{" "}
          </h3>
        </div>
        <div className="ga-logo">
          <p>Previous:</p>
          <a href="https://generalassemb.ly" target="_blank">
            <img src={gaLogo} alt="generalassembly" className="ga" />
          </a>
        </div>
        <div className="work">
          <p>
            <strong></strong>Featured Projects:
          </p>
          <div className="project-logos">
            <a
              href="https://github.com/whobutjg/project-one-cheqmate"
              target="_blank"
            >
              <img src={cheqmate} alt="cheqmate" className="cheqmate" />
            </a>
            <a
              href="https://github.com/whobutjg/project-one-cheqmate"
              target="_blank"
            >
              <img src={fido} alt="fidoshotel" className="fidos-hotel" />
            </a>
          </div>
        </div>

        <div className="contact"></div>
      </div>
    </>
  );
}

export default App;
