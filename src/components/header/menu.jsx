import { ContainerNav, Container } from "./header.style.js";
import { NavLink } from "react-router-dom";
import React from "react";

const Menu = ({ onHide }) => {
  return (
    <Container>
      <div>
        <label>
          <span>Rent</span>ME!
        </label>
      </div>
      <ContainerNav>
        <ul>
          <li>
            <NavLink to="/home" onClick={onHide}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" onClick={onHide}>
              Bike Stores
            </NavLink>
          </li>
        </ul>
      </ContainerNav>
    </Container>
  );
};

export default Menu;
