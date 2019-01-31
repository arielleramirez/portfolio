import React, { Component, Fragment } from "react";
import parkit from "../images/parkitimg.png";
import guerra from "../images/guerra.png";
import rogue from "../images/rogueimg.png";
import park from "../images/parkit.png";
import ro from "../images/rogue.png";
import gu from "../images/erinsport.png";
import { UncontrolledCarousel } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const project1 = [
  {
    src: require("../images/parkit.png")
  },
  {
    src: require("../images/rogue.png")
  },
  {
    src: require("../images/erinsport.png")
  }
];

const project2 = [
  {
    src: require("../images/parkit.png")
  },
  {
    src: require("../images/rogue.png")
  },
  {
    src: require("../images/erinsport.png")
  }
];

const project3 = [
  {
    src: require("../images/parkit.png")
  },
  {
    src: require("../images/rogue.png")
  },
  {
    src: require("../images/erinsport.png")
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      guerra: false,
      rogure: false,
      park: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
    console.log(event.target.className);
    this.setState({
      modal: !this.state.modal
    });
    if (event.target.className === "park") {
      this.setState({
        park: true,
        guerra: false,
        rogue: false
      });
    } else if (event.target.className === "guerra") {
      this.setState({
        park: false,
        guerra: true,
        rogue: false
      });
    } else {
      this.setState({
        park: false,
        guerra: false,
        rogue: true
      });
    }
  }

  render() {
    console.log(this.state.park);
    console.log(this.state.guerra);

    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      />
    );

    return (
      <Fragment>
        <div className="flex-container">
          <div className="box3">
            <div>
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="box4">
            <div onClick={() => this.props.history.push("/")}>
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

        <div className="flex-box">
          <div>
            <img src={parkit} />
            <div className="imgdes">
              <p>Parkit</p>
              <button id="projbtn" className="park" onClick={this.toggle}>
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img src={guerra} />
            <div className="imgdes1">
              <p>La Guerra</p>
              <button onClick={this.toggle} className="guerra" id="projbtn">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img src={rogue} />
            <div className="imgdes2">
              <p>Rogue Pickings</p>
              <button onClick={this.toggle} className="Rogue" id="projbtn">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          external={externalCloseBtn}
          id="modal"
        >
          <ModalBody className="modimg">
            {this.state.park ? <UncontrolledCarousel items={project1} /> : null}
            {this.state.rogue ? (
              <UncontrolledCarousel items={project2} />
            ) : null}
            {this.state.guerra ? (
              <UncontrolledCarousel items={project3} />
            ) : null}
          </ModalBody>
          <ModalHeader className="modheader">
            {this.state.park ? <h3>ParkIt.</h3> : null}
            {this.state.guerra ? <h3>La Guerra</h3> : null}
            {this.state.rogue ? <h3>Rogue Pickings</h3> : null}
          </ModalHeader>
          <ModalFooter>
            <button id="projbtn">
              {this.state.park ? (
                <a
                  href="https://www.google.com"
                  className="link"
                  target="_blank"
                >
                  View Demo
                </a>
              ) : null}
              {this.state.rogue ? (
                <a
                  href="https://www.facebook.com"
                  className="link"
                  target="_blank"
                >
                  View Demo
                </a>
              ) : null}
              {this.state.guerra ? (
                <a
                  href="https://www.google.com"
                  className="link"
                  target="_blank"
                >
                  View Demo
                </a>
              ) : null}
            </button>
            <button id="projbtn">View Site</button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default Projects;
