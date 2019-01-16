import React, { Component, Fragment } from "react";

class Contact extends Component {
  handleClick = event => {
    console.log(event.target);
  };
  render() {
    return (
      <Fragment>
        <div className="body flex-container">
          <div className="box1">
            <h1>Arielle Ramirez</h1>
            <h3>Full Stack Developer/Software Engineer</h3>
          </div>
          <div onClick={this.handleClick}>
            <div className="container arrow" onClick={this.handleClick}>
              <div className="triangle1" />
            </div>
          </div>
          <div>
            <div className="container arrow" onClick={this.handleClick}>
              <div className="triangle2" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
