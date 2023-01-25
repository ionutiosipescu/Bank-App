import styled from "styled-components";
import { device } from "./../../utils/breakpoints/breakpoints";

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
  /* height: 100%; */
  @media (${device.mobileS}) {
    width: 100%;
    margin: 0;
    padding: 10px 0px 0px 10px;
  }
  @media (${device.laptopL}) {
    width: calc(100% - 250px);
    margin-left: 250px;
    padding: 10px 0px 30px 30px;
  }
`;
