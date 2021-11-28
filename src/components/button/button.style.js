import styled from "styled-components";
import { theme } from "../../theme";

export const ButtonStyled = styled.button`
  display: ${(props) => props.display || "flex"};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  padding: 0.5rem 1rem;
  border-radius: ${(props) => props.borderRadius || "15px"};
  font-size: 2rem;
  border: none;
  &:hover {
    background-color: ${(props) => props.bgColorHover};
    color: ${(props) => props.colorHover};
  }
  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 1rem;
  }
`;
