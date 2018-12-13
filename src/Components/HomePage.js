import React, { Component, Fragment } from "react";
import background from "../images/background.png";
import ContactModal from "../Components/ContactModal";
import arrow from "../images/arrow.png";
import ProjectsModal from "../Components/ProjectsModal";
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.png";
import parkit from "../images/parkit.png";
import erin from "../images/erinsport.png";
import gmail from "../images/gmail.png";
import calculator from "../images/calculator.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class HomePage extends Component {
  state = {
    modal: false
  };

  toggle = event => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <Fragment>
        <div className="homepagebox">
          <h1 id="h1">AR</h1>

          <article>
            <p>
              Hi my name is Arielle, I am an
              <span className="green"> enthusiastic </span>Fullstack Developer
              eager to push the envelope of
              <span className="green"> innovation</span>.
            </p>
          </article>
          <img className="arrow" src={arrow} />
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "white"
            }}
          >
            <div className="projbox">
              <a
                href="https://www.youtube.com/watch?v=VdENh6TLo9U&t=1s"
                target="_blank"
              >
                <img className="proj" value="parkit" src={parkit} />
              </a>
              <a href="laguerrafilm.com" target="_blank">
                <img className="proj" src={erin} />
              </a>
              <a href="https://arcalcapp.herokuapp.com/" target="_blank">
                <img className="proj" src={calculator} />
              </a>
              <div className="proj" />
              <div className="proj" />
              <div className="proj" />
              <div className="proj" />
              <div className="proj" />
              <div className="proj" />
            </div>
            <div
              style={{
                height: 105,
                width: "100%",
                backgroundImage: `url(${background})`
              }}
            >
              <div
                style={{
                  marginLeft: "45%",
                  paddingTop: 30
                }}
              >
                <a
                  href="http://www.linkedin.com/in/arielle-ramirez"
                  target="_blank"
                >
                  <img
                    style={{ width: 50, paddingLeft: "5", paddingRight: 5 }}
                    src={linkedin}
                  />
                </a>
                <a
                  href="https://www.instagram.com/ariellenramirez/"
                  target="_blank"
                >
                  <img
                    style={{ width: 50, paddingLeft: 5, paddingRight: 5 }}
                    src={instagram}
                  />
                </a>

                <img
                  style={{ width: 50, paddingLeft: 5, paddingRight: 5 }}
                  src={gmail}
                  onClick={this.toggle}
                />
              </div>
              <ContactModal modal={this.state.modal} toggle={this.toggle} />
              <ProjectsModal modal={this.state.modal} toggle={this.toggle} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
