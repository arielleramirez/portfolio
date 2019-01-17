import React, { Component, Fragment } from "react";

class Contact extends Component {
  handleClick = event => {
    console.log(event.target);
  };
  render() {
    return (
      <Fragment>
        <div>
          <h2>Contact Page</h2>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
