import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  background-color: var(--gray-light);
  height: 100vh;
  width: 100vw;
  @media (max-width: 1545px) {
    height: fit-content;
    width: 100%;
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  width: 100%;
  height: 100%;
  padding: 5px 60px 0 90px;
  @media (max-width: 1919px) {
    padding: 5px 20px 0 70px;
    margin-left: 70px;
  }
  @media (max-width: 1819px) {
    padding: 5px 0 0 50px;
    margin-left: 70px;
  }
  @media (max-width: 1545px) {
    padding: 5px 10px 0 50px;
    margin-left: 70px;
  }
  @media (max-width: 1125px) {
    padding: 5px 0px;
    margin-left: 100px;
  }
  @media (max-width: 585px) {
    padding: 5px 0px;
    margin-left: 80px;
  }
`;
