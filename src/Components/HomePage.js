import React, { Component, Fragment } from "react";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="body flex-container">
          <div className="hamburger">
            <div />
            <div />
            <div />
          </div>
          <div className="box1">
            <div>
              <h1>Arielle Ramirez</h1>
              <h3>Full Stack Developer/Software Engineer</h3>
            </div>
          </div>
          <div className="box2">
            <div onClick={() => this.props.history.push("/projects")}>
              <div className="container arrow">
                <div className="triangle1" />
              </div>
              <div>
                <div className="container arrow">
                  <div className="triangle2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
