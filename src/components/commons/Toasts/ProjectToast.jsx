import React, { useState } from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

function ProjectToast({ showProjectToast }) {
  const [show, setShow] = useState(showProjectToast);

  return (
    <>
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast
          style={{ background: "rgb(39, 136, 39)", color: "white",}}
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
        >
          <Toast.Body>
            <h6>Changes has been saved successfully.</h6>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default ProjectToast;
