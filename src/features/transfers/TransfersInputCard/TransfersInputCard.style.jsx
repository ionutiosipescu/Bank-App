import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const TransferBody = styled.div`
  display: flex;
  width: 100%;
  height: 95%;
  justify-content: space-between;
  padding: 0 15px;
  @media (${device.mobileS}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TransferInputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  margin-top: 30px;
  @media (${device.mobileS}) {
    flex-direction: column;
  }
  @media (${device.laptopL}) {
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
  }
`;

export const TransferInputSection = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0px;
`;
