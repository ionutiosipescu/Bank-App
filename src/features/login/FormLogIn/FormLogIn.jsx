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
  setLogInUser,
} from "../../../state-management/Auth/loginUser/loginUser.action";
import {
  selectOtp,
  selectLoginUser,
  selectIsSubmiting,
  selectErrorMessage,
  selectModalIsOpen,
} from "../../../state-management/Auth/loginUser/loginUser.selector";
import { fetchLoginData } from "../../../state-management/Auth/loginUser/loginUser.service";

function FormLogIn() {
  const dispatch = useDispatch();
  const errorMsg = useSelector(selectErrorMessage);
  const loginData = useSelector(selectLoginUser);
  const otp = useSelector(selectOtp);
  const modalOpen = useSelector(selectModalIsOpen);
  const isSubmitting = useSelector(selectIsSubmiting);
  const navigate = useNavigate();

  // axios request -> response true - > change isSubmitting status
  const onSubmit = () => {
    // dispatch(controlMoldalAsync(true));
    // de schimbat cu cea de jos
    dispatch(fetchLoginData(loginData));
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

  // // restore localStorage
  useEffect(() => {
    persistor.purge();
    dispatch(resetRedux());
  }, []);

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
