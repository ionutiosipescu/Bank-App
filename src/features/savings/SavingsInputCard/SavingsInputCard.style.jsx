import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70%;
  /* & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 80%;
  } */
  @media (max-width: 1440px) {
    flex-direction: row;
    width: fit-content;
    & > div {
      /* flex-direction: row; */
    }
  }
`;

export const InputCardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
