import React, { Component, Fragment } from "react";
import background from "../images/background.png";
import NavBar from "../Components/NavBar";

const style = {
  backgroundImage: `url(${background})`,
  width: "100%",
  height: "100vh",
  margin: "auto",
  backgroundSize: "cover"
};

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="homepagebox">
          <NavBar />
          <article>
            <p>
              Hi my name is Arielle, I am an
              <span className="green"> enthusiastic </span>Fullstack Developer
              eager to push the envelope of
              <span className="green">innovation</span>.
            </p>
          </article>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
