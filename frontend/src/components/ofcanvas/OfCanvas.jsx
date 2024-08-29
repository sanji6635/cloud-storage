import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function OfCanvas() {
  return (
    <>
      <OffCanvasExample placement="end" name="end" />
    </>
  );
}

export default OfCanvas;

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FaRegUserCircle size={22} onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Link to="/profile">
            <Button variant="primary"> Profile</Button>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
