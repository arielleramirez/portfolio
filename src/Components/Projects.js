import React, { Component } from "react";

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
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
      </div>
    );
  }
}

export default Projects;
