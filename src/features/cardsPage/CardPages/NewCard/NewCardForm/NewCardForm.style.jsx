import styled from "styled-components";
import { Form } from "formik";

export const NewCardFormContainer = styled.div`
  width: 70%;
  height: 100%;
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: 100%;
  padding-bottom: 30px;
  & > h2 {
    margin-bottom: 50px;
  }
`;

export const RowNewCardSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-end;
  @media (max-width: 1440px) {
    justify-content: space-between;
  }
`;
