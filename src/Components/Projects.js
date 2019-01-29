import React, { Component } from "react";
import parkit from "../images/parkitimg.png";
import guerra from "../images/guerra.png";
import rogue from "../images/rogueimg.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="flex-container">
          <div className="box3">
            <div>
              <h2>Projects</h2>
            </div>
          </div>
          <div className="box4">
            <div onClick={() => this.props.history.push("/resume")}>
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

        <div class="flex-box">
          <div>
            <img src={parkit} />
          </div>
          <div>
            <img src={guerra} />
          </div>
          <div>
            <img src={rogue} />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
