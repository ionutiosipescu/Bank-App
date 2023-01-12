import React from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CustomInput from "../../../../components/CustomInputs/CustomInput";
import { registerSchemaAccount } from "../../ValidationSchema/ValidationSchema";
import FooterControl from "../../FooterControl/FooterControl";
import "../../../../components/UI/Input/Input.css";
import { FormContainerAccount } from "./AccountForm.style";
import { handleSubmit } from "../../../../utils/helpers/helperFunctions/HandleSubmit";
import { selectRegisterUser } from "../../../../state-management/Auth/registerhelper/registerhelper.selector";
import { setRegisterUser } from "../../../../state-management/Auth/registerhelper/registerhelper.actions";
import { selectStep } from "../../../../state-management/Auth/registerhelper/registerhelper.selector";
import { setStep } from "../../../../state-management/Auth/registerhelper/registerhelper.actions";

function AccountForm() {
  const step = useSelector(selectStep);
  const dispatch = useDispatch();
  const registerData = useSelector(selectRegisterUser);

  const setData = (e) => {
    dispatch(setRegisterUser(registerData, e));
  };

  return (
    <>
      <Formik
        initialValues={{ ...registerData }}
        validationSchema={registerSchemaAccount}
        onSubmit={() => handleSubmit(dispatch, setStep, step)}
      >
        <FormContainerAccount>
          <RegisterFormPart>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              setData={setData}
            />
          </RegisterFormPart>

          <RegisterFormPart>
            <CustomInput
              label="Display Name"
              name="displayName"
              type="text"
              small
              placeholder="Enter your display name"
              setData={setData}
            />
            <CustomInput
              label="Phone number"
              name="mobile"
              type="number"
              small
              placeholder="Enter your phone number"
              setData={setData}
            />
          </RegisterFormPart>
          <RegisterFormPart>
            <CustomInput
              label="Password"
              name="password"
              type="password"
              small
              placeholder="Enter your password"
              setData={setData}
            />
            <CustomInput
              label="ConfirmPassword"
              name="confirmPassword"
              type="password"
              small
              placeholder="Enter your password"
              setData={setData}
            />
          </RegisterFormPart>
          <FooterControl />
        </FormContainerAccount>
      </Formik>
    </>
  );
}

export default AccountForm;
