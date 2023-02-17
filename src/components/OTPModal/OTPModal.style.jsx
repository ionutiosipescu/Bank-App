import styled, { css } from "styled-components";

export const OTPContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  height: 35vh;
`;

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const OTPInput = styled.input.attrs({ type: "tel" })`
  width: 40px;
  height: 50px;
  margin: 0 10px 0 10px;
  text-align: center;
  font-size: 1.8rem;
  border-radius: 10px;
  outline: none;
  border: 1px solid var(--purple-dark);
  color: var(--text);
  ${({ noArrows }) =>
    noArrows &&
    css`
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `};
`;
