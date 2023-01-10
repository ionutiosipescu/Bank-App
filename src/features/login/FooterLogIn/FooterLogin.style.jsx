import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

export const FooterContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterBoxLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  a {
    margin-left: 10px;
  }
  @media ${device.mobileL} {
    flex-direction: row;
  }
`;
