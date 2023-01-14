import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  height: 60%;
  @media (max-width: 1439px) {
    flex-direction: row;
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
  width: 100%;
`;

export const InputCardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
