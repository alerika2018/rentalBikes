import React from "react";
import { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { theme } from "../../theme";
import CanvasNewBikeForm from "./canvasNewBikeForm.jsx";

const CanvasNewBike = ({ handleClose, show, setCounter }) => {
  let style = "";
  const [matchesDesktop, setMatchesDesktop] = useState(
    window.matchMedia(`(min-width: ${theme.breakpoints.desktop})`).matches
  );

  /*detecting change in breakpoint to hide vertical menu*/
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${theme.breakpoints.desktop})`
    );

    mediaQuery.onchange = () => {
      setMatchesDesktop(mediaQuery.matches);
    };
  }, []);

  if (matchesDesktop)
    style = {
      width: "50%",
    };
  else
    style = {
      width: "100%",
    };

  let styleHeader = {
    display: "flex",
    justifyContent: "space between",
    alignItems: "center",
    height: "75px",
    backgroundColor: theme.colors.lightPurple,
  };

  return (
    <Offcanvas
      onHide={handleClose}
      placement="end"
      scroll="true"
      backdrop="true"
      show={show}
      style={style}
    >
      <Offcanvas.Header closeButton style={styleHeader}>
        <Offcanvas.Title style={styleHeader}>New Bike Store</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <CanvasNewBikeForm setCounter={setCounter} handleClose={handleClose} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CanvasNewBike;
