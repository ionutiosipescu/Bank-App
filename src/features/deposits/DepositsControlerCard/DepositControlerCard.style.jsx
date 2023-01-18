import styled from "styled-components";
import { Form } from "formik";
import { device } from "../../../utils/breakpoints/breakpoints";

export const FormContainerDeposits = styled(Form)`
  width: 100%;
  height: 100%;
`;

export const BtnContainerControler = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;

export const BtnContainerSubmitControler = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;
