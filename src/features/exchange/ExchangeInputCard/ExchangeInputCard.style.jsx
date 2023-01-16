import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-bottom: 20px;
  & > div:first-of-type {
    margin: 0 20px 10px 0;
  }
  /* Media queries */
  @media (${device.mobileS}) {
    flex-direction: column;
    margin-bottom: 10px;
  }
  @media (${device.laptop}) {
    flex-direction: row;
    margin-bottom: 20px;
  }
  @media (${device.laptopL}) {
    flex-direction: column;
    margin-bottom: 20px;
  }
  @media (${device.desktop}) {
    flex-direction: row;
    height: 200px;
    margin-bottom: 20px;
  }
`;

export const ExchangeInputContainer = styled.div`
  height: fit-content !important;
  margin: 50px 0 100px 0 !important;
  /* Media queries */
  @media (${device.mobileS}) {
    margin: 10px 0 0 0 !important;
  }
`;
