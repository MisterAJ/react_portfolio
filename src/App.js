import React, { Component } from "react";
import "./App.css";

import Jumbotron from "./Components/jumbotron";
import Skills from "./Components/skills";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Skills />
      </div>
    );
  }
}

export default App;
