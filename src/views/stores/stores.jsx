import React from "react";
import { Container } from "./stores.style.js";
import Button from "../../components/button/button.jsx";
import { theme } from "../../theme.js";

import CanvasNewBike from "../../components/canvasNewBike/canvasNewBike.jsx";
import StoreList from "../../components/storeList/storeList.jsx";

import { useState, useEffect } from "react";
import { FaSistrix } from "react-icons/fa";

export const Stores = () => {
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

  /*variables to control offcanvas - new store*/
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [totalStoresFound, setTotalStoresFound] = useState(0);
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");

  const handleSearch = () => {
    setSearch(name);
  };

  const handleKey = (e) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  return (
    <Container>
      <div id="divTitle">
        <div id="divBar">
          <h1>Find a place to rent a bike</h1>
          <div id="divSearch">
            <input
              placeholder="Search a store..."
              onKeyPress={(e) => handleKey(e)}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button onClick={() => handleSearch()}>
              <FaSistrix />
            </button>
          </div>
        </div>
        <div id="divButtonAddNew">
          {matchesDesktop && (
            <Button
              width="150px"
              bgColor={theme.colors.lightPurple}
              bgColorHover={theme.colors.gray}
              color={theme.colors.secondary}
              colorHover={theme.colors.primary}
              title={"New Store"}
              onClick={handleShow}
            />
          )}
          {!matchesDesktop && (
            <Button
              width="48px"
              height="48px"
              bgColor={theme.colors.lightPurple}
              bgColorHover={theme.colors.gray}
              color={theme.colors.yellow}
              colorHover={theme.colors.primary}
              title={"+"}
              borderRadius="50%"
              onClick={handleShow}
            />
          )}
        </div>
      </div>

      <p id="divCounter">{totalStoresFound} stores found</p>

      <StoreList
        setTotalStoresFound={setTotalStoresFound}
        totalStoresFound={totalStoresFound}
        counter={counter}
        setCounter={setCounter}
        search={search}
      />

      <CanvasNewBike
        handleClose={handleClose}
        show={show}
        setCounter={setCounter}
      />
    </Container>
  );
};

export default Stores;
