import React, { useEffect } from "react";
import { Formik } from "formik";
import { advancedSchema } from "../ValidationSchema/ValidationSchema";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import CustomPassword from "../../../components/CustomInputs/CustomPassword";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormContainerLogin } from "./FormLogin.style";
import { ErrorMsg } from "../../../components/Errors/Auth/ErrorMsg.style";
import { ButtonSignIn } from "./FormLogin.style";
import { persistor } from "../../../state-management/store";
import Modal from "../../../components/Modal/Modal";
import OTPModal from "../../../components/OTPModal/OTPModal";
import {
  resetRedux,
  setlogin,
} from "../../../state-management/Auth/login/login.action";
import {
  selectOtp,
  selectlogin,
  selectIsSubmiting,
  selectErrorMessage,
  selectModalIsOpen,
} from "../../../state-management/Auth/login/login.selector";
import { fetchLoginData } from "../../../state-management/Auth/login/login.service";
import { setLoginDataForm } from "../../../state-management/Auth/login/login.action";

function FormLogIn() {
  const dispatch = useDispatch();
  const errorMsg = useSelector(selectErrorMessage);
  const loginData = useSelector(selectlogin);
  const otp = useSelector(selectOtp);
  const modalOpen = useSelector(selectModalIsOpen);
  const isSubmitting = useSelector(selectIsSubmiting);
  const navigate = useNavigate();
  const { username, password } = loginData;

  // axios request -> response true - > change isSubmitting status
  const onSubmit = () => {
    // dispatch(controlMoldalAsync(true));
    // de schimbat cu cea de jos
    dispatch(fetchLoginData(loginData));
  };

  // send data to Redux userProfile
  const setData = (e) => {
    const { name, value } = e.target;
    const eventObj = {
      name: name,
      value: value,
    };
    dispatch(setLoginDataForm(loginData, eventObj));
  };

  // check isSubmitting status -> redirect to dashboard
  useEffect(() => {
    if (isSubmitting) {
      navigate("/dashboard");
    } else {
      return;
    }
  }, [isSubmitting]);

  // // restore localStorage
  useEffect(() => {
    persistor.purge();
    dispatch(resetRedux());
  }, []);

  useEffect(() => {
    console.log(modalOpen);
  }, [modalOpen]);

  return (
    <>
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
            value={username || ""}
            setData={setData}
          />
          <CustomPassword
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={password || ""}
            setData={setData}
          />
          {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>}
          <ButtonSignIn type="submit">Log in</ButtonSignIn>
        </FormContainerLogin>
      </Formik>
      <Modal opened={modalOpen} closeBtn>
        <OTPModal />
      </Modal>
    </>
  );
}

export default FormLogIn;
