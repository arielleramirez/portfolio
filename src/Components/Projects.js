import React, { Component, Fragment } from "react";
import parkit from "../images/parkitimg.png";
import guerra from "../images/guerra.png";
import rogue from "../images/rogueimg.png";
import park from "../images/parkit.png";
import ro from "../images/rogue.png";
import gu from "../images/erinsport.png";
import tetris from "../images/tetris.png";
import tetris1 from "../images/tetris1.png";
import tetris2 from "../images/tetris2.png";
import tetris3 from "../images/tetris3.png";
import heart from "../images/heart.png";

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
  { src: require("../images/rogue.png") },
  {
    src: require("../images/map.png")
  },
  {
    src: require("../images/radishes.png")
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

const project4 = [
  {
    src: require("../images/tetris1.png")
  },
  {
    src: require("../images/tetris2.png")
  },
  {
    src: require("../images/tetris3.png")
  }
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      guerra: false,
      rogure: false,
      park: false,
      tetris: false
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
        rogue: false,
        tetris: false
      });
    } else if (event.target.className === "guerra") {
      this.setState({
        park: false,
        guerra: true,
        rogue: false,
        tetris: false
      });
    } else if (event.target.className === "tetris") {
      this.setState({
        park: false,
        guerra: false,
        rogue: false,
        tetris: true
      });
    } else {
      this.setState({
        park: false,
        guerra: false,
        rogue: true,
        tetris: false
      });
    }
  }

  render() {
    console.log(this.state.park);
    console.log(this.state.guerra);
    console.log(this.state.tetris);

    const externalCloseBtn = (
      <button
        className="close"
        style={{ position: "absolute", top: "15px", right: "15px" }}
        onClick={this.toggle}
      />
    );

    return (
      <Fragment>
        <div
          className=" flex-box"
          style={{
            border: "4px solid #f7c6c3",
            backgroundColor: "white"
          }}
        >
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
              <button onClick={this.toggle} className="rogue" id="projbtn">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img src={tetris} />
            <div className="imgdes3" style={{ marginTop: "-100" }}>
              <p>Tetris</p>
              <button onClick={this.toggle} className="tetris" id="projbtn">
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
          <ModalBody
            style={{ border: " 1.5px solid #dce0e5" }}
            className="modimg"
          >
            {this.state.park ? <UncontrolledCarousel items={project1} /> : null}
            {this.state.rogue ? (
              <UncontrolledCarousel items={project2} />
            ) : null}
            {this.state.guerra ? (
              <UncontrolledCarousel items={project3} />
            ) : null}

            {this.state.tetris ? (
              <UncontrolledCarousel items={project4} />
            ) : null}
          </ModalBody>
          <ModalHeader id="modheader">
            {this.state.park ? (
              <h3 style={{ fontSize: 45, lineHeight: 1 }}>ParkIt.</h3>
            ) : null}
            {this.state.park ? (
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 0.5,
                  marginLeft: 2,
                  fontStyle: "italic"
                }}
              >
                Find parking near you
              </p>
            ) : null}
            {this.state.park ? (
              <h4 style={{ fontSize: 12, fontWeight: "normal" }}>
                ParkIt. provides oppertunity to resserve parking on the go.
                <br />
                <b>Technologies Used:</b> Ruby on Rails, JavaScript, React.js
                and Leaflet
              </h4>
            ) : null}

            {this.state.guerra ? (
              <h3 style={{ fontSize: 45 }}>La Guerra</h3>
            ) : null}
            {this.state.guerra ? (
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 0.5,
                  marginLeft: 2,
                  fontStyle: "italic"
                }}
              >
                Find parking near you
              </p>
            ) : null}
            {this.state.guerra ? (
              <h4 style={{ fontSize: 12, fontWeight: "normal" }}>
                La Guerra is a website that showcases the Documentary of an
                undocumented family from Mexico.
                <br />
                <b> Technologies Used:</b> JavaScript and React.js
              </h4>
            ) : null}

            {this.state.rogue ? (
              <h3 style={{ fontSize: 45 }}>Rogue Pickings</h3>
            ) : null}
            {this.state.rogue ? (
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 0.5,
                  marginLeft: 2,
                  fontStyle: "italic"
                }}
              >
                Find parking near you
              </p>
            ) : null}
            {this.state.rogue ? (
              <h4 style={{ fontSize: 12, fontWeight: "normal" }}>
                Rogue Pickings provides the oppertunity to browse fresh
                vegetables and local mart. <br />
                <b>Technologies Used:</b> JavaScript and React.js
              </h4>
            ) : null}

            {this.state.tetris ? (
              <h3 style={{ fontSize: 45, lineHeight: 1 }}>Tetris</h3>
            ) : null}
            {this.state.tetris ? (
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 0.5,
                  marginLeft: 2,
                  fontStyle: "italic"
                }}
              >
                Play your favorite childhood game
              </p>
            ) : null}
            {this.state.tetris ? (
              <h4 style={{ fontSize: 12, fontWeight: "normal" }}>
                Tetris is a mock off from the original. A childhood game I loved
                revamped with pastel color palette to boot.
                <br />
                <b>Technologies Used:</b> Ruby on Rails, JavaScript and Canvas.
              </h4>
            ) : null}
          </ModalHeader>
          <ModalFooter>
            <button id="projbtn">
              {this.state.park ? (
                <a
                  href="https://www.youtube.com/watch?v=VdENh6TLo9U"
                  className="link"
                  target="_blank"
                >
                  View Demo
                </a>
              ) : null}
              {this.state.rogue ? (
                <a
                  href="https://www.youtube.com/watch?v=h8A9WC8BS-Q"
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
              {this.state.tetris ? (
                <a
                  href="https://youtu.be/ez-Ewv1iGyM"
                  className="link"
                  target="_blank"
                >
                  View Demo
                </a>
              ) : null}
            </button>
            {this.state.park ? null : (
              <button id="projbtn">
                {this.state.rogue ? (
                  <a
                    href="https://rougepickings.herokuapp.com/index.html"
                    className="link"
                    target="_blank"
                  >
                    View Site
                  </a>
                ) : null}
                {this.state.guerra ? (
                  <a
                    href="https://rougepickings.herokuapp.com/index.html"
                    className="link"
                    target="_blank"
                  >
                    View Site
                  </a>
                ) : null}

                {this.state.tetris ? (
                  <a
                    href="https://rougepickings.herokuapp.com/index.html"
                    className="link"
                    target="_blank"
                  >
                    View Site
                  </a>
                ) : null}
              </button>
            )}
          </ModalFooter>
        </Modal>
        <div>
          <h5>
            Made with <img src={heart} /> by Arielle Ramirez{" "}
          </h5>
        </div>
      </Fragment>
    );
  }
}

export default Projects;

// <div className="flex-container">
//   <div className="box3">
//     <div>
//       <h2>Portfolio</h2>
//     </div>
//   </div>
//   <div className="box4">
//     <div onClick={() => this.props.history.push("/")}>
//       <div className="container arrow">
//         <div className="triangle1" />
//       </div>
//       <div>
//         <div className="container arrow">
//           <div className="triangle2" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
