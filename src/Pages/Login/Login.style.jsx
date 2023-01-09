import styled from "styled-components";
import { device } from "../../utils/breakpoints/breakpoints";

export const LogInContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-light);
  font-weight: 600;
  @media ${device.laptop} {
    padding: 50px 0;
  }
`;
