/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import NavBar from "./components/NavBar";
import gaLogo from "./images/dlf.pt-25-png-2777875.png";

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
          <p>Currently:</p>
          <img src={gaLogo} alt="generalassembly" className="ga" />
        </div>
        <div className="work">
          <p><strong></strong>Featured Projects:</p>

        </div>

        <div className="contact"></div>
      </div>
    </>
  );
}

export default App;
