import styled from "styled-components";
import { theme } from "../../theme.js";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  #divTitle {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    h1 {
      font-size: 1.2rem;
    }
    border-bottom: 1px solid ${theme.colors.yellow};
  }

  #divCounter {
    padding-top: 2rem;
    padding-left: 1rem;
  }

  #divBar {
    flex-direction: column;
  }

  #divSearch {
    padding-left: 0;
    input {
      border: none;
      border-bottom: 1px solid gray;
    }
    button {
      background-color: transparent;
      border: none;
    }
  }

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    #divTitle {
      h1 {
        font-size: 1.7rem;
      }
    }
    #divBar {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      h1 {
        margin: 0;
      }
    }
    #divSearch {
      padding-left: 2rem;
    }
  }
`;
