import React, { Component, Fragment } from "react";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import gmail from "../images/gmail.png";
import Projects from "../Components/Projects";
import About from "../Components/About";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="body flex-container">
          <div className="box1">
            <div>
              <h1>Arielle Ramirez</h1>
              <h3>Full Stack Developer/Software Engineer</h3>
              <div className="icons">
                <div>
                  <a
                    href="http://www.instagram.com/ariellenramirez/"
                    target="_blank"
                  >
                    <img src={instagram} />
                  </a>
                </div>
                <div>
                  <a
                    href="http://www.linkedin.com/in/arielle-ramirez"
                    target="_blank"
                  >
                    <img src={linkedin} />
                  </a>
                </div>
                <div>
                  <a href="https://github.com/arielleramirez" target="_blank">
                    <img src={github} />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src={gmail} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Projects />
      </Fragment>
    );
  }
}

export default HomePage;

//   <div className="box2">
//     <div onClick={() => this.props.history.push("/about")}>
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
