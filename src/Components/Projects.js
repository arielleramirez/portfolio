import React, { Component, Fragment } from "react";
import parkit from "../images/parkitimg.png";
import guerra from "../images/guerra.png";
import rogue from "../images/rogueimg.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Projects extends Component {
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
              <button id="projbtn" onClick={this.toggle}>
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img src={guerra} />
            <div className="imgdes1">
              <p>La Guerra</p>
              <button onClick={this.toggle} id="projbtn">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img src={rogue} />
            <div className="imgdes2">
              <p>Rogue Pickings</p>
              <button onClick={this.toggle} id="projbtn">
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
        >
          <ModalHeader>Modal title</ModalHeader>
          <ModalBody>
            <b>Look at the top right of the page/viewport!</b>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default Projects;
