import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media ${device.mobileL} {
    flex-direction: row;
    gap: 20px;
  }
`;

// export const FooterBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
