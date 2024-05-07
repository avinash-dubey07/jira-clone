import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import CreateIssue from "../components/CreateIssue/Createissue";


function Popup() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ModalComponent show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default Popup;
