import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  /* background-color: ${theme.colors.purple}; */
  border-bottom: 3px solid ${theme.colors.purple};
  background-color: white;
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  div {
    label {
      padding-left: 2rem;
      width: max-content;
      color: ${theme.colors.purple};
      font-size: 3rem;
      font-weight: bold;
      span {
        font-size: 2rem;
      }
    }
  }
`;

export const ContainerNav = styled.nav`
  display: flex;
  ul {
    display: flex;
    /* justify-content: flex-end; */
    flex-direction: column;
    margin: 0;
    width: 100%;
    padding-left: 0;

    li {
      list-style-type: none;
      padding-bottom: 1rem;
      padding-top: 1rem;

      a {
        text-decoration: none;
        display: block;
        color: ${theme.colors.purple};
        font-weight: bold;
        font-size: 1rem;
        &:hover {
          font-size: 1.5rem;
        }
      }
      border-bottom: 2px solid ${theme.colors.yellow};

      transition: all 0.7s ease-out;

      &:hover {
        background-color: rgba(${theme.colors.lightPurple}, 0.3);
      }
    }
  }

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    max-width: ${theme.breakpoints.desktopMaxWidth};
    margin: 0 auto;
    padding-right: 2rem;
    ul {
      justify-content: flex-end;
      flex-direction: row;

      li {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0;
        padding-top: 0;
        border-bottom: none;

        &:nth-child(1),
        &:nth-child(2) {
          border-right: 1px solid gray;
        }
        &:hover {
          border-bottom: 2px solid ${theme.colors.yellow};
        }
        a {
          color: ${theme.colors.purple};
          font-size: 1.2rem;
        }
      }
    }
  }
`;
export const MenuButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; //${theme.colors.secondary};

  border: none;
  border-radius: 10px;
  margin-left: 2rem;
  img {
    width: 44px;
    height: 44px;
  }
`;
