import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  #mainForm {
    display: grid;

    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, auto);
    column-gap: 1rem;
    label {
      color: ${theme.colors.purple};
      font-size: 1rem;
      span {
        color: red;
      }
    }

    input,
    select {
      margin-bottom: 1.5rem;
    }
    fieldset {
      margin: 0;
      padding: 0;
      border: solid;
    }

    #hours {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      padding: 1rem;

      width: 80%;
      margin: 0 auto;
      div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 1fr;
        gap: 0.5rem;
        select {
          margin-bottom: 0.5rem;
        }
      }
    }

    #divBikeRentals {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      align-items: center;
      button {
        font-size: 1rem;
      }
    }

    #div1,
    #div2,
    #div3,
    #div4,
    #div5,
    #div6,
    #div7,
    #div8 {
      display: flex;
      flex-direction: column;
    }

    #div1 {
      grid-column: 1/3;
      grid-row: 1/2;
    }
    #div2 {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    #div3 {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    #div4 {
      grid-column: 1/2;
      grid-row: 3/4;
    }
    #div5 {
      grid-column: 2/3;
      grid-row: 3/4;
    }
    #div6 {
      grid-column: 1/2;
      grid-row: 4/5;
    }
    #div7 {
      grid-column: 2/3;
      grid-row: 4/5;
    }
    #div8 {
      grid-column: 1/3;
      grid-row: 5/6;
    }
    #div9 {
      grid-column: 1/3;
      grid-row: 6/7;
    }
    #divBikeRentals {
      grid-column: 1/3;
      grid-row: 7/8;
    }
    #divBikeRentalsArray {
      grid-column: 1/3;
      grid-row: 8/9;
    }
    #divSubmit {
      grid-column: 1/3;
      grid-row: 9/10;
    }
  }

  #bikesForm {
    display: flex;
    flex-direction: column;

    #divButtonAddRental {
      position: fixed;
      bottom: 0;
      right: 0;
      padding-bottom: 3rem;
      padding-right: 2rem;
    }
  }
  #divNext {
    grid-column: 1/3;
    display: flex;
    flex-direction: column;

    align-items: center;
    #divMessages {
      color: red;
    }
  }

  #divErrors {
    label {
      color: red;
    }
  }

  #divSubmit {
    display: flex;
    justify-content: space-evenly;
    margin-top: 3rem;
    margin-bottom: 3rem;
    button {
      font-size: 1rem;
      padding: 0.5rem 0;
    }
  }

  @media only screen and (min-width: ${theme.breakpoints.desktop}) {
    #mainForm {
      width: 80%;
      margin: 0 auto;
    }
  }
`;
