import styled from "styled-components";
import { theme } from "../../theme.js";
export const Container = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  width: 90%;
  margin: 0 auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  div {
    -webkit-box-shadow: 0px 7px 12px 3px #c1c1c1;
    box-shadow: 0px 7px 12px 3px #c1c1c1;
    border-radius: 3px;
    .divPicture {
      width: 100%;
      height: 200px;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      box-shadow: none;

      a {
        background-color: white;
        width: fit-content;
        border-radius: 10px;
        padding: 0.3rem 0.7rem;

        align-items: center;
        justify-content: center;
        display: flex;
        color: ${theme.colors.purple};
        margin-top: 1rem;
      }
    }
    div {
      /* background-color: rgba(255, 255, 255, 0.6); */
      color: ${theme.colors.purple};
      height: 150px;

      padding: 1rem;
      font-weight: bold;
      border: none;
      margin: 0;

      h2 {
        font-size: 1rem;
        padding: 0;
      }
      p {
        font-size: 0.75rem;
        color: black;
        padding: 0;
        margin: 0;
      }
      a {
        font-size: 0.8rem;
        color: black;
      }
    }
  }
  margin-bottom: 6rem;

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: dense;
    grid-template-rows: auto;

    & .store:nth-child(3n) {
      grid-column: span 2;
    }
  }
`;
