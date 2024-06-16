import React from "react";
import Modal from "react-bootstrap/Modal";

function AboutModal(props) {
  const { show, onHide, component } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
    >
      {component}
    </Modal>
  );
}

export default AboutModal;
