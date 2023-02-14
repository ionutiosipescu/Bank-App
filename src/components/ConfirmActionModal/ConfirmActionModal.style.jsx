import styled from "styled-components";

export const ActionModalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 35vw;
  height: 30vh;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 65%;
  padding: 20px;
  & > div {
    display: flex;
    justify-content: space-between;
    & > span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > h3 {
        margin-left: 10px;
      }
    }
  }
`;
