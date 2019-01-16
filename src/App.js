import React, { Component } from "react";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/resume" component={Resume} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/contact" component={Contact} exact />

          <Route component={Error} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
