import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { advancedSchema } from "../ValidationSchema/ValidationSchema";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import CustomPassword from "../../../components/CustomInputs/CustomPassword";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "debounce";
import Button from "../../../components/UI/NewButton/Button.component";
import { useNavigate } from "react-router-dom";
import { FormContainerLogin } from "./FormLogin.style";
import { ErrorMsg } from "../../../components/Errors/Auth/ErrorMsg.style";
import { setLogInUser } from "../../../state-management/Auth/loginUser/loginUser.action";
import { fetchLoginData } from "../../../state-management/Auth/loginUser/loginUser.service";
import { selectLoginUser } from "../../../state-management/Auth/loginUser/loginUser.selector";
import { selectIsSubmiting } from "../../../state-management/Auth/loginUser/loginUser.selector";
import { selectErrorMessage } from "../../../state-management/Auth/loginUser/loginUser.selector";
import CustomreCaptcha from "../../../components/CustomInputs/CustomreCaptcha";

function FormLogIn() {
  const dispatch = useDispatch();
  const errorMsg = useSelector(selectErrorMessage);
  const loginData = useSelector(selectLoginUser);
  const isSubmitting = useSelector(selectIsSubmiting);
  const navigate = useNavigate();
  const siteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

  // axios request -> response true - > change isSubmitting status
  const onSubmit = (values, actions) => {
    dispatch(
      fetchLoginData("http://localhost:8080/bank/auth/signin", loginData)
    );
  };

  // send data to Redux userProfile
  const setData = debounce((e) => {
    dispatch(setLogInUser(loginData, e));
  }, 500);

  // check isSubmitting status -> redirect to dashboard
  useEffect(() => {
    if (isSubmitting) {
      navigate("/dashboard");
    } else {
      return;
    }
  }, [isSubmitting]);

  // restore localStorage
  // useEffect(() => {
  //   if (localStorage.getItem("persist:root") !== null) {
  //     localStorage.removeItem("persist:root");
  //     window.location.reload();
  //   }
  // }, []);

  const initialObject = {
    username: "",
    password: "",
    recaptcha: "",
  };
  return (
    <Formik
      initialValues={{ ...initialObject }}
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
        {/* <CustomreCaptcha name="recaptcha" sitekey={siteKey} /> */}
        {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>}
        <Button size="100" typeclass="secondary" type="submit">
          Log In
        </Button>
      </FormContainerLogin>
    </Formik>
  );
}

export default FormLogIn;
