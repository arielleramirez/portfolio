import React, { Component } from "react";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import Projects from "./Components/Projects";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/about" component={About} exact />

          <Route component={Error} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
