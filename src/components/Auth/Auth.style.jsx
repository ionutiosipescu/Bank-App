import styled from "styled-components";
import Button from "../UI/Button/Button";
import { Form } from "formik";

export const AuthWrapper = styled.div`
  height: 50vh;
  width: 40vw;
`;

export const AuthButton = styled(Button)`
  margin: 35px 0 0 0;
`;

export const AuthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AuthRowSection = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-direction: column;
  div {
    margin: 0;
  }
  @media (max-width: 1440px) {
    justify-content: space-between;
  }
`;

export const AuthForm = styled(Form)`
  width: 70%;
`;
