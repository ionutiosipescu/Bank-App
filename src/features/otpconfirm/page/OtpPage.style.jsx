import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const ConfirmOTPContainer = styled.div`
  height: auto;
  width: 100vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-light);
  font-weight: 600;
  overflow-x: hidden;
  @media ${device.mobileL} {
    padding: 20px;
    height: 100vh;
  }
  @media ${device.laptop} {
    padding: 50px 200px;
  }
`;

export const MainConfirmOTPWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 13px 12px 41px 14px rgba(0, 0, 0, 0.32);
  @media ${device.mobileL} {
    width: 50%;
    height: 60%;
    margin: auto;
  }
`;

export const ConfirmContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 90px 0;
  align-items: center;
`;
