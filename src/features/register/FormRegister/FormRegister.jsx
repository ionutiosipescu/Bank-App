import React from "react";
import {
  RegitsterFormContainer,
  RegisterFormWrapper,
} from "./FormRegister.style";
import { useState } from "react";
import AccountForm from "../FormPagesRegister/AccountForm/AccountForm";
import PersonalForm from "../FormPagesRegister/PersonalForm/PersonalForm";
import PlanForm from "../FormPagesRegister/PlanForm/PlanForm";
import ConfirmForm from "../FormPagesRegister/ConfirmForm/ConfirmForm";
import { Form, Formik } from "formik";
import Step from "../Step/Step";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setStep } from "../../../state-management/registerhelper/registerhelper.actions";
import { selectStep } from "../../../state-management/registerhelper/registerhelper.selector";
import NextBtn from "../../../components/StepButtons/NextBtn";
import PrevBtn from "../../../components/StepButtons/PrevBtn";

function FormRegister() {
  return (
    <>
      {/* <h1>Register</h1> */}
      <RegitsterFormContainer>
        <RegisterFormWrapper>
          <Step />
        </RegisterFormWrapper>
      </RegitsterFormContainer>
    </>
  );
}

export default FormRegister;
