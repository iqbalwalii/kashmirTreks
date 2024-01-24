import React from "react";
import { Button } from "react-bootstrap";
import ModalA from "react-bootstrap/Modal";
import "./Modal.module.css";
const Modal = () => {
  const [show, setShow] = React.useState(true);
  const handleClose = () => setShow(false);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setShow((prevShow) => !prevShow);
    }, 15000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <ModalA show={show} onHide={handleClose}>
        <ModalA.Header closeButton>
          <ModalA.Title style={{ color: "red", textAlign: "center" }}>
            WEBSITE AVAILABLE FOR SALE
          </ModalA.Title>
        </ModalA.Header>
        <ModalA.Body>
          <br />
          Contact at this&nbsp;
          <a className="linkImp" href="mailto:iqbalwali.work@gmail.com">
            email
          </a>{" "}
          for enquiries or visit&nbsp;
          <a
            className="linkImp"
            target="_blank"
            rel="noreferrer"
            href="https://iqbalwali.vercel.app"
          >
            website
          </a>
        </ModalA.Body>
        <ModalA.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </ModalA.Footer>
      </ModalA>
    </div>
  );
};

export default Modal;
