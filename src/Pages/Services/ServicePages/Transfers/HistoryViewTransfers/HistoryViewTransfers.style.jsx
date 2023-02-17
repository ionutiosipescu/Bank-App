import styled from "styled-components";
import { device } from "../../../../../utils/breakpoints/breakpoints";

export const UserContainerTransfer = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 60%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const NewTransferCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 20%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 20px -9px rgba(21, 20, 47, 0.73);
  overflow: hidden;
  background-image: url(https://paysend.com/images/how-long-does-it-take-to-transfer-money-1200.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const RecentUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 25vh;
  & > * {
    height: 100%;
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

export const ButtonsTransferBox = styled.div`
  margin-left: 20px;
  display: flex;
  gap: 15px;
`;
