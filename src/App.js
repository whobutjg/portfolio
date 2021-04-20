import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Resume from "./pages/resume";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar />
        <Switch>
          <Route exact path="/portfolio" component={About} />
          <Route path="/resume" component={Resume} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;
