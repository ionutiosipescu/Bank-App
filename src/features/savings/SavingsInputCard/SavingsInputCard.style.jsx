import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 70%;
  margin-bottom: 50px;
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
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 85%;
  margin: 50px 0;
`;

export const InputCardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
