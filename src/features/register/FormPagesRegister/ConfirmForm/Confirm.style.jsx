import styled from "styled-components";
import { device } from "../../../../utils/breakpoints/breakpoints";

export const ConfirmFormPart = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  flex-direction: column;
  @media ${device.mobileL} {
    flex-direction: row;
    gap: 30px;
    justify-content: center;
  }
`;
