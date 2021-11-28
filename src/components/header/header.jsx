import React from "react";
import Menu from "./menu.jsx";
import { Container, MenuButton } from "./header.style.js";
import { useState, useEffect } from "react";
import { theme } from "../../theme.js";
import CanvasMenu from "./canvasMenu.jsx";
import menu from "../../assets/menu.png";

const Header = () => {
  const [matchesDesktop, setMatchesDesktop] = useState(
    window.matchMedia(`(min-width: ${theme.breakpoints.desktop})`).matches
  );

  /*variables to control offcanvas - vertical menu*/
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  /*detecting change in breakpoint to hide vertical menu*/
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${theme.breakpoints.desktop})`
    );

    mediaQuery.onchange = () => {
      if (mediaQuery.matches) {
        setShow(false);
      }
      setMatchesDesktop(mediaQuery.matches);
    };
  }, []);

  return (
    <Container>
      {matchesDesktop ? (
        <Menu />
      ) : (
        <MenuButton onClick={handleShow}>
          <img src={menu} />
        </MenuButton>
      )}
      <CanvasMenu show={show} setShow={setShow} />
    </Container>
  );
};

export default Header;
