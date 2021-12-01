import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background-color: ${theme.colors.lightPurple};
  height: 60px;
  width: 100%;
  z-index: 1000;
`;
