import styled from "styled-components";
import { theme } from "../../theme.js";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    margin: 2rem 0;
  }
  .info {
    padding: 1rem;
    a {
      color: ${theme.colors.purple};
      svg {
        padding-left: 0.5rem;
      }
    }
  }

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
  }
`;
