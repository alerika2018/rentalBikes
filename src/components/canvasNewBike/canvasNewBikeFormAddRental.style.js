import styled from "styled-components";
import { theme } from "../../theme.js";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid ${theme.colors.gray};

  .delete {
    display: flex;
    justify-content: space-between;
  }

  label {
    color: ${theme.colors.purple};
    font-size: 1rem;
    span {
      color: red;
    }
  }

  button {
    background-color: transparent;
    border: none;
    color: purple;
    font-size: 1rem;
    text-decoration: underline;
  }
  #divSave {
    display: flex;
    flex-direction: column;
    #divMessages {
      color: red;
    }
  }

  #lblBikeType {
    font-size: 1.3 rem !important;
    font-weight: bold !important;
  }

  #divTimePrices {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${theme.colors.gray};
    margin-bottom: 2rem;
  }

  #divPriceTime1,
  #divPriceTime2,
  #divPriceTime3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    column-gap: 2rem;

    #divTime,
    #divPrice {
      input {
        display: inline;
        min-width: 0;
        padding: 0;
        margin: 0;
      }
    }
    #divTime {
      display: flex;
      flex-direction: column;
      grid-column: 1/2;
      grid-row: 1/2;
    }
    #divPrice {
      display: flex;
      flex-direction: column;
      grid-column: 2/3;
      grid-row: 1/2;
    }
  }
`;
