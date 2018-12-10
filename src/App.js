import React, { Component } from "react";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import Resume from "./Components/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
