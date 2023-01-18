import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 70%;
  @media (max-width: 1439px) {
    flex-direction: row;
    align-self: flex-start;
    width: 100%;
    & > * {
      width: 30%;
    }
  }
  @media (max-width: 880px) {
    flex-direction: column;
    & > * {
      width: 90%;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 20px);
  width: 100%;
`;

export const InputWrapperLoans = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100% - 20px);
  width: 100%;
  margin-top: 0px;
`;

export const InputCardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
