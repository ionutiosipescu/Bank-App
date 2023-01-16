import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  background-color: var(--gray-light);
  height: 100%;
  width: 100%;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 250px);
  height: 100%;
  margin-left: 250px;
  padding: 10px 0px 30px 30px;
  @media (max-width: 1050px) {
    width: calc(100% - 65px);
    margin-left: 65px;
  }
  @media (max-width: 880px) {
    padding: 10px 15px 10px 10px;
  }
  @media (max-width: 460px) {
    width: 100%;
    padding: 10px 15px 0px 5px;
    margin: 0;
  }
`;
