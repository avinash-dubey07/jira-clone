import React from "react";
import Modal from "react-bootstrap/Modal";

function CreateModal(props) {
  const { show, onHide, component } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      {component}
    </Modal>
  );
}

export default CreateModal;
