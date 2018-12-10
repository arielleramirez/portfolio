import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ContactModal extends Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modal}
          toggle={this.props.toggle}
          className={this.props.className}
          style={{ width: 400, marginTop: "15%" }}
        >
          <ModalHeader toggle={this.props.toggle}>Contact Me</ModalHeader>
          <ModalBody>
            Email: ariellenramirez@gmail.com <br />
            Phone: 603-721-6388
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ContactModal;
