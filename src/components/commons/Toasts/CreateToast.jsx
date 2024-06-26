import React, { useState } from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

function CreateToast({ showToast }) {
  const [show, setShow] = useState(showToast);

  return (
    <>
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast
          style={{ background: "rgb(39, 136, 39)", color: "white" }}
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Jira Clone</strong>
            <small>1 seconds ago</small>
          </Toast.Header>
          <Toast.Body>
            <h6>Issue has been successfully created.</h6>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default CreateToast;
