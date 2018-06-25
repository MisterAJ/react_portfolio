import React, { Component } from "react";
import "./App.css";

import Jumbotron from "./Components/jumbotron";
import Skills from "./Components/skills";
import Footer from "./Components/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
