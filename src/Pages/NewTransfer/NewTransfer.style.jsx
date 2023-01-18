import styled from "styled-components";
import { device } from "../../utils/breakpoints/breakpoints";

export const TransferWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 100px);
  width: 100%;
  @media (${device.mobileS}) {
    flex-direction: column-reverse;
    padding: 10px 5px 0 10px;
  }
  @media (${device.laptopL}) {
    flex-direction: row;
    padding: 30px 30px 0px 10px;
  }
`;
