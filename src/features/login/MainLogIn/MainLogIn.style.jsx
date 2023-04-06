import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const LogInWrapper = styled.div`
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
    width: 70vw;
  }
`;
export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60%;
  padding: 1rem;
  p {
    text-align: center;
  }
  @media ${device.laptop} {
    width: 60%;
    padding: 2rem;
  }
`;
export const Logo = styled.img`
  width: 150px;
`;
export const LogoBankShort = styled.img`
  width: 240px;
`;
export const LogoText = styled.p`
  color: var(--gray-dark);
`;
