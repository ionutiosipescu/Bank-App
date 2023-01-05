import styled from "styled-components";
import { device } from "../../utils/breakpoints/breakpoints";

// lv8
export const RegisterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gray-light);
  font-weight: 600;
  overflow-x: hidden;
  @media ${device.laptop} {
    padding: 50px 200px;
  }
`;
