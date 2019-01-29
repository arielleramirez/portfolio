import React, { Component, Fragment } from "react";

class Contact extends Component {
  handleClick = event => {
    console.log(event.target);
  };
  render() {
    return (
      <Fragment>
        <div className="box3">
          <div>
            <h2>About</h2>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
