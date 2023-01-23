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

  input[type="radio"] {
    display: none;
  }
`;

export const BtnContainerSubmitControler = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const FormContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const BtnBoxExchange = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--purple);
  transition: 0.3s;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 50px;
  box-shadow: 0px 0px 12px -8px rgba(21, 20, 47, 0.8);
  width: 150px;
  height: 40px;
  &:hover {
    scale: 1.08;
    background: var(--purple-dark);
    color: var(--white);
  }
  input[type="radio"]:checked {
    background: var(--purple-dark);
    color: var(--white);
  }
`;
export const SelectAccountToggle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
`;
