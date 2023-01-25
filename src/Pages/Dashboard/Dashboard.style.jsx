import styled from "styled-components";
import { device } from "./../../utils/breakpoints/breakpoints";

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  @media (${device.mobileS}) {
    flex-direction: column;
  }
  @media (${device.laptop}) {
    flex-direction: column;
    justify-content: start;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (${device.mobileS}) {
    flex-direction: column;
  }
  @media (${device.tablet}) {
    flex-direction: row;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (${device.mobileS}) {
    flex-direction: column;
  }
  @media (${device.laptop}) {
    flex-direction: row;
  }
`;
