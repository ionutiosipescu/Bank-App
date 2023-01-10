import styled from "styled-components";
import { Form } from "formik";
import { device } from "../../../utils/breakpoints/breakpoints";

export const FormContainerLogin = styled(Form)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 10px;
  @media ${device.mobileL} {
    width: 315px;
  }
`;
