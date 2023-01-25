import styled from "styled-components";
import { device } from "../../../../../utils/breakpoints/breakpoints";

export const UserContainerTransfer = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ListItemSectionTransfer = styled.div`
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
    width: 100%;
    justify-content: space-between;
  }
`;
