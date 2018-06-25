import React, { Component } from "react";
import "./App.css";

import AboutMe from "./Components/aboutme";
import Footer from "./Components/footer";
import Jumbotron from "./Components/jumbotron";
import Skills from "./Components/skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Skills />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}

export default App;
