import styled from "styled-components";
import { device } from "../../../utils/breakpoints/breakpoints";

// lv2
export const RegisterFormPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 30px;
  flex-direction: column;
  @media ${device.mobileL} {
    flex-direction: row;
  }
`;

// lv3
export const FormContainer = styled.form`
  height: 100%;
`;

// lv4
export const RegisterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
// lv5
export const RegitsterFormContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
export const FooterControlPages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
