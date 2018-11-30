import React, { Component, Fragment } from "react";

class NavBar extends Component {
  state = {
    showBar: false,
    marginLeft: -200
  };
  toggleSideBar = event => {
    console.log(event.target);
    this.setState({
      showBar: !this.state.showBar,
      marginLeft: 300
    });
  };
  render() {
    return (
      <div
        id="sidebar"
        onClick={this.toggleSideBar}
        style={{
          position: "fixed",
          height: "100vh",
          backgroundColor: " #c0ceb2",
          marginLeft: `${this.state.width}%`
        }}
      >
        <h1 className="logo">AR</h1>
        <div className="toggle-btn">
          <span />
          <span />
          <span />
        </div>

        {this.state.showBar === true ? (
          <div style={{ width: 180 }}>
            <ul>
              <li>Resume</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default NavBar;

// <div className="flex-container" onClick={this.handleToggle}>
//   <div />
//   <div />
//   <div />
//   <article>
//     {this.state.showBar === true ? (
//       <div id="navbar">
//         <ul>
//           <li>Projects</li>
//           <li>Resume</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     ) : (
//       ""
//     )}
//   </article>
// </div>
