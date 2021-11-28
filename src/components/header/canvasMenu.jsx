import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { theme } from "../../theme.js";
import Menu from "./menu.jsx";

const CanvasMenu = ({ show, setShow }) => {
  let style = "";

  const [matchesTablet, setMatchesTablet] = useState(
    window.matchMedia(`(min-width: ${theme.breakpoints.tablet})`).matches
  );

  if (matchesTablet) {
    style = {
      width: "50%",
    };
  } else {
    style = {
      width: "75%",
    };
  }

  let styleHeader = {
    borderRadius: "20px",
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Offcanvas
      onHide={handleClose}
      placement="start"
      scroll="true"
      backdrop="true"
      show={show}
      style={style}
    >
      <Offcanvas.Header style={styleHeader} closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <Menu onHide={handleClose} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CanvasMenu;
