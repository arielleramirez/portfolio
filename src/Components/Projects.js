import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="box3">
          <div>
            <h1>Projects</h1>
          </div>
        </div>
        <div className="box4">
          <div onClick={() => this.props.history.push("/contact")}>
            <div className="container arrow1">
              <div className="triangle3" />
            </div>
            <div>
              <div className="container arrow2">
                <div className="triangle4" />
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
