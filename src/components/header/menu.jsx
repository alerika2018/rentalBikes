import { ContainerNav } from "./header.style.js";
import { NavLink } from "react-router-dom";
import React from "react";

//onHide --- this function helps to close vertical menu

const Menu = ({ onHide }) => {
  return (
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
        <li>
          <NavLink to="/about" onClick={onHide}>
            About
          </NavLink>
        </li>
      </ul>
    </ContainerNav>
  );
};

export default Menu;
