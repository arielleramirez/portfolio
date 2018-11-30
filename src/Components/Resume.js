import React, { Component, Fragment } from "react";
import background from "../images/background.png";
import NavBar from "../Components/NavBar";
import me from "../images/me.png";

class Resume extends Component {
  render() {
    return (
      <Fragment>
        <div className="resumebox">
          <div>
            <img className="profile" src={me} />
            <article>
              <h1>Arielle Ramirez</h1>
              <p>Email: ariellenramirez@gmail.com</p>
              <p>Phone: 603-721-6388</p>
              <p>Linkedin:</p>
              <p>Git:</p>
            </article>
            <nav className="vline"> </nav>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Resume;
