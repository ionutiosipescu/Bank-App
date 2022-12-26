import styled from "styled-components";
import TopCard from "./../../components/TopCard/TopCard";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 1545px) {
    flex-direction: row;
  }
  @media (max-width: 1125px) {
    flex-direction: row;
  }
  @media (max-width: 965px) {
    flex-direction: column;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 1545px) {
    flex-direction: column;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 1545px) {
    flex-direction: column;
    justify-content: space-between;
  }
  @media (max-width: 1125px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
  @media (max-width: 965px) {
    flex-direction: column;
  }
`;
