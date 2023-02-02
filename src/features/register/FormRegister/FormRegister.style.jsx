import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

// lv2
export const RegisterFormPart = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  flex-direction: column;
  margin-bottom: 25px;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const FooterControlPages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 30px;
  gap: 20px;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`;
