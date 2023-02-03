import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { advancedSchema } from "../ValidationSchema/ValidationSchema";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import CustomPassword from "../../../components/CustomInputs/CustomPassword";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "debounce";
import { useNavigate } from "react-router-dom";
import { FormContainerLogin } from "./FormLogin.style";
import { ErrorMsg } from "../../../components/Errors/Auth/ErrorMsg.style";
import { setLogInUser } from "../../../state-management/Auth/loginUser/loginUser.action";
import { selectLoginUser } from "../../../state-management/Auth/loginUser/loginUser.selector";
import { selectIsSubmiting } from "../../../state-management/Auth/loginUser/loginUser.selector";
import { selectErrorMessage } from "../../../state-management/Auth/loginUser/loginUser.selector";
// import CustomreCaptcha from "../../../components/CustomInputs/CustomreCaptcha";
import { fetchLoginData } from "../../../state-management/Auth/loginUser/loginUser.service";
import Button from "../../../components/UI/Button/Button";

function FormLogIn() {
  const dispatch = useDispatch();
  const errorMsg = useSelector(selectErrorMessage);
  const loginData = useSelector(selectLoginUser);
  const isSubmitting = useSelector(selectIsSubmiting);
  const navigate = useNavigate();

  // axios request -> response true - > change isSubmitting status
  const onSubmit = () => {
    dispatch(
      fetchLoginData("http://localhost:8080/bank/auth/signin", loginData)
    );
  };

  // send data to Redux userProfile
  const setData = (e) => {
    dispatch(setLogInUser(loginData, e));
  };

  // check isSubmitting status -> redirect to dashboard
  useEffect(() => {
    if (isSubmitting) {
      navigate("/dashboard");
    } else {
      return;
    }
  }, [isSubmitting]);

  // restore localStorage
  useEffect(() => {
    if (localStorage.getItem("persist:root") !== null) {
      localStorage.removeItem("persist:root");
      window.location.reload();
    }
  }, []);

  return (
    <Formik
      initialValues={{ ...loginData }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      <FormContainerLogin>
        <CustomInput
          label="Username"
          name="username"
          type="text"
          placeholder="Enter your username"
          setData={setData}
        />
        <CustomPassword
          label="Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          setData={setData}
        />
        {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>}

        <Button type="button" onClick={onSubmit}>
          Log in
        </Button>
      </FormContainerLogin>
    </Formik>
  );
}

export default FormLogIn;

// const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

{
  /* <CustomreCaptcha name="recaptcha" sitekey={siteKey} /> */
}
