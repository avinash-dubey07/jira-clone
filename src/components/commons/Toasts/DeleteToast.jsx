import React, { useState } from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

function DeleteToast({ showDeleteToast }) {
  const [show, setShow] = useState(showDeleteToast);

  return (
    <>
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast
          style={{ background: "rgb(5, 137, 5)", color: "white" }}
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Body>
            <h6>Ticket has been removed successfully.</h6>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default DeleteToast;
