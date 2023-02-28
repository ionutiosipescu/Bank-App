import styled from "styled-components";

export const CurrencyInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;
  width: 100%;
  height: 60px;
  border-radius: 30px;
  background: var(--purple);
  & input {
    background: none;
    border: none;
    outline: none;
    color: var(--text-light);
    font-size: 1.2rem;
  }
`;

export const CurrencySelect = styled.select`
  background: none;
  border: none;
  outline: none;
  color: var(--text-light);
  font-size: 1.2rem;
  & option {
    background-color: var(--purple);
    margin-top: 10px;
  }
`;

////////////////////

// export const SelectContainer = styled.div`
//   position: relative;
//   display: inline-block;
//   width: 200px;
//   font-size: 16px;
// `;

// export const SelectedOption = styled.div`
//   background-color: white;
//   color: black;
//   padding: 10px;
//   border: 1px solid lightgray;
//   border-radius: 4px;
//   cursor: pointer;
//   &:hover {
//     background-color: lightgray;
//   }
// `;

// export const Arrow = styled.i`
//   position: absolute;
//   right: 10px;
//   top: 50%;
//   transform: translateY(-50%);
//   display: inline-block;
//   width: 0;
//   height: 0;
//   border-left: 6px solid transparent;
//   border-right: 6px solid transparent;
//   border-top: 6px solid black;
// `;

// export const OptionsContainer = styled.ul`
//   position: absolute;
//   z-index: 1;
//   background-color: white;
//   color: black;
//   width: 100%;
//   border: 1px solid lightgray;
//   border-radius: 4px;
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
// `;

// export const Option = styled.li`
//   padding: 10px;
//   cursor: pointer;
//   &:hover {
//     background-color: lightgray;
//   }
// `;
