import styled from "styled-components";
import { device } from "../../utils/breakpoints/breakpoints";

// lv5
export const RegisterContainer = styled.div`
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
export const RegisterContainerPlan = styled.div`
  height: auto;
  width: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-light);
  font-weight: 600;
  overflow-x: hidden;
  @media ${device.mobileL} {
    padding: 20px;
    height: auto;
  }
  @media ${device.laptop} {
    padding: 50px 200px;
  }
`;
