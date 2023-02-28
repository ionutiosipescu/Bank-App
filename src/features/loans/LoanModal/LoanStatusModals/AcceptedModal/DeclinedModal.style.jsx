import styled from "styled-components";

export const DeclinedWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin-top: 20px; */
  align-items: center;
  width: 100%;
  height: 100%;
  & img {
    margin-left: 10%;
    width: 45%;
  }
`;

export const DeclinedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 60%;
  color: var(--text);
`;
