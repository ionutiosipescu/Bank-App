import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  height: 100vh;
  @media (max-width: 1024px) {
    /* flex-direction: row; */
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1024px) {
    /* flex-direction: column; */
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1024px) {
    /* flex-direction: column; */
  }
`;
