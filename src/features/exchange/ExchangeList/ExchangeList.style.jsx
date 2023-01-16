import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const ListItemSection = styled.div`
  display: flex;
  justify-content: space-evenly !important;
  align-items: center;
  /* Media  */
  @media (${device.mobileS}) {
    width: 100%;
    & > * {
      margin: 0px !important;
    }
  }
  @media (${device.tablet}) {
    width: calc(100% - 150px) !important;
    justify-content: space-between !important;
  }
`;

export const RateContainer = styled.h3`
  @media (${device.mobileS}) {
    display: none !important;
  }
`;
export const DateContainer = styled.h3`
  @media (max-width: 680px) {
    display: none !important;
  }
`;
