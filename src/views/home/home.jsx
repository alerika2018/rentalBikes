import React from "react";
import banner from "../../assets/banner.png";
import bikesImage from "../../assets/bikesImage.png";
import { useEffect, useState } from "react";
import { theme } from "../../theme.js";
import { Container } from "./home.style.js";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [matchesDesktop, setMatchesDesktop] = useState(
    window.matchMedia(`(min-width: ${theme.breakpoints.desktop})`).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${theme.breakpoints.desktop})`
    );

    mediaQuery.onchange = () => {
      setMatchesDesktop(mediaQuery.matches);
    };
  }, []);

  return (
    <Container>
      {matchesDesktop ? (
        <>
          <img src={banner} alt="" />
        </>
      ) : (
        <>
          <img src={bikesImage} alt="" />
        </>
      )}

      <h1>Need a ride?</h1>
      <div className="info">
        <p>Explore where to rent a bike in Canada and go out for a ride!</p>

        <Link to={{ pathname: "/store" }}>
          Start
          <FaArrowRight />
        </Link>
      </div>
    </Container>
  );
};

export default Home;
