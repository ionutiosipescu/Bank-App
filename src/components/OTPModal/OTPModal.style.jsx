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
  width: fit-content;
  justify-content: center;
  align-items: center;
  & input {
    height: 50px;
    margin: 0 5px 0 5px;
    text-align: center;
    font-size: 1.6rem;
    border-radius: 10px;
    outline: none;
    border: 1px solid var(--purple-dark);
    color: var(--text);
  }
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

export const OTPInput_2 = styled.input.attrs({
  type: "tel",
})`
  display: block;
  margin: 2rem auto;
  border: none;
  padding: 0;
  width: 260px;
  background: repeating-linear-gradient(
      90deg,
      dimgrey 0,
      dimgrey 1.6rem,
      transparent 0,
      transparent 2.8rem
    )
    0 100%/ 16rem 2px no-repeat;
  font: 3rem droid sans moro, consolas, monospace;
  letter-spacing: 1.15rem;
  &:focus {
    outline: none;
    color: var(--purple);
  }
`;
