import React, { Component, Fragment } from "react";
import parkit from "../images/parkitimg.png";
import guerra from "../images/guerra.png";
import rogue from "../images/rogueimg.png";
import me from "../images/me.png";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      >
        &times;
      </button>
    );

    return (
      <Fragment>
        <div
          className="body flex-container"
          style={{
            border: "4px solid #fff7f7",
            backgroundColor: "white"
            //   width: 470
          }}
        >
          <div className="hamburger">
            <div style={{ backgroundColor: "#f7c6c3" }} />
            <div style={{ backgroundColor: "#f7c6c3" }} />
            <div style={{ backgroundColor: "#f7c6c3" }} />
          </div>
          <div className="box1">
            <div>
              <h1>About Me</h1>
              <h3>
                Hi, my name is Arielle. An enthusiastic software engineer from
                Brookline, New Hampshire.
              </h3>
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

export default About;
