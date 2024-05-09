import React from 'react';
import Modal from "react-bootstrap/Modal";

export default function AboutModal() {
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
  )
}
