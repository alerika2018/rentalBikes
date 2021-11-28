import styled, { StyledComponent } from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 6rem;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  #linkBack {
    padding: 1rem 0 1rem 1rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
    padding: 2rem 0;
    text-align: center;
    color: ${theme.colors.purple};
    border-bottom: 2px solid ${theme.colors.yellow};
  }

  h2 {
    font-size: 1rem;
    font-weight: bold;
    padding-top: 1rem;
    span {
      font-size: 0.8rem;
      font-weight: normal;
    }
  }
  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    padding-top: 1rem;
    text-align: center;
    border-bottom: 2px solid ${theme.colors.yellow};
    padding-bottom: 1rem;
  }
  p {
    margin: 0;
    padding: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  #divStoreInfo,
  #divDescription,
  #divStoreHours,
  #divStoreRentals {
    margin: 0 1rem;
  }

  #divStoreRentals {
    div {
      border-bottom: 1px dashed ${theme.colors.gray};
      padding-bottom: 1rem;
    }
  }

  .map {
    height: 200px;
    div {
      height: inherit;
      & :nth-child(2) {
        & :nth-child(4) {
          display: none;
        }
      }
    }
  }

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    img {
      height: 100%;
      width: 80%;
      object-fit: cover;
    }

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(4, auto);

    #linkBack {
      grid-column: 1/4;
      grid-row: 1/2;
    }
    #divStoreInfo {
      grid-column: 1/3;
      grid-row: 2/3;
      width: 70%;
      margin: 0 auto;
    }
    #divDescription {
      padding-top: 2rem;
      grid-column: 1/3;
      grid-row: 3/4;
      width: 70%;
      margin: 0 auto;
      padding-bottom: 2rem;
    }
    #divImage {
      grid-column: 3/4;
      grid-row: 2/4;
      padding-bottom: 2rem;
      margin: 0 auto;
    }
    #divStoreHours {
      grid-column: 1/2;
      grid-row: 4/5;

      margin: 0 auto;
    }
    #divStoreRentals {
      grid-column: 2/3;
      grid-row: 4/5;
      div {
        border: none;
      }
    }

    #divStoreHours,
    #divStoreRentals {
      width: 80%;
      h3 {
        border: none;
        color: ${theme.colors.lightPurple};
        width: auto;
      }
      border-right: 1px solid ${theme.colors.gray};
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .bikeType {
      color: ${theme.colors.lightPurple};
    }
    .map {
      grid-column: 3/4;
      grid-row: 4/5;
      height: 100%;
      z-index: -100;
      width: 80%;
      div {
        height: inherit;
      }
    }
  }
`;
