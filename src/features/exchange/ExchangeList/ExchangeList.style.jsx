import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const ListItemSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Media  */
  @media (${device.mobileS}) {
    width: 100%;
    & > * {
      margin: 0px;
    }
  }
  @media (${device.tablet}) {
    width: calc(100% - 250px);
    justify-content: space-between;
  }
`;

export const RateContainer = styled.h3`
  @media (${device.mobileS}) {
    display: none;
  }
  @media (${device.tablet}) {
    display: block;
  }
`;
export const DateContainer = styled.h3`
  @media (max-width: 680px) {
    display: none;
  }
`;
