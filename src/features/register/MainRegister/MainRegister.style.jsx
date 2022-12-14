import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

// lv3
export const MainRegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  min-height: 650px;
`;
export const MainRegisterContainerPlan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  min-height: 650px;
  @media ${device.laptop} {
    padding: 50px 120px;
  }
`;
// lv4
export const MainRegisterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 13px 12px 41px 14px rgba(0, 0, 0, 0.32);
  @media ${device.laptop} {
    width: auto;
    /* height: 100%; */
  }
`;
export const HeroBox = styled.div`
  height: 100%;
`;
