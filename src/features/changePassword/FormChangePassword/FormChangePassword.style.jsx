import styled from "styled-components";
import { Form } from "formik";
import { device } from "../../../utils/breakpoints/breakpoints";
import Button from "../../../components/UI/Button/Button";

export const FormContainerChangePassword = styled(Form)`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 10px;
  @media ${device.mobileL} {
    width: 400px;
  }
`;

export const ButtonChangePassword = styled(Button)`
  height: 40px;
`;
