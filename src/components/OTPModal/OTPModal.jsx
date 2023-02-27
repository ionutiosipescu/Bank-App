import React, { useEffect } from "react";
import Button from "../UI/Button/Button";
import {
  InputsContainer,
  OTPContainer,
  OTPInput,
  OTPInput_2,
} from "./OTPModal.style";
import { ButtonsContainer } from "./../../features/cardsPage/CardPages/NewCard/NewCardAvailable/NewCardAvailable.style";
import { useState } from "react";
import { useRef } from "react";
import OtpInput from "react-otp-input";
import { useSelector, useDispatch } from "react-redux";
import { setOtp } from "../../state-management/Auth/login/login.action";
import { selectOtp } from "../../state-management/Auth/login/login.selector";
import { Formik, Form } from "formik";
import { ErrorMsg } from "../Errors/Auth/ErrorMsg.style";
import { selectOtpError } from "../../state-management/Auth/login/login.selector";
import { setOtpError } from "../../state-management/Auth/login/login.action";
import { controlMoldalAsync } from "../../state-management/Auth/login/login.action";
import { selectlogin } from "../../state-management/Auth/login/login.selector";
import { VerifyOtp } from "../../state-management/Auth/login/login.service";
import { ResendOtp } from "../../state-management/Auth/login/login.service";
import {
  selectEmailValidate,
  selectErrorOtp,
  selectIsSubmitingOtp,
  selectShowMessageOtp,
} from "../../state-management/Auth/login/login.selector";
import RequestMessage from "../RequestMessage/RequestMessage";
import { setResetShowMsg } from "../../state-management/Auth/login/login.action";

function OTPModal() {
  const dispatch = useDispatch();
  const errorMsg = useSelector(selectOtpError);
  const otp = useSelector(selectOtp);
  const loginData = useSelector(selectlogin);
  const emailValidate = useSelector(selectEmailValidate);

  const errorMsgRequest = useSelector(selectErrorOtp);
  const isSubmiting = useSelector(selectIsSubmitingOtp);
  const showMessage = useSelector(selectShowMessageOtp);

  const handleSubmit = () => {
    if (otp.split("").length === 6) {
      dispatch(VerifyOtp(otp, loginData, emailValidate));
    } else {
      dispatch(setOtpError("Invalid OTP"));
    }
  };

  const handleResendOtp = () => {
    dispatch(ResendOtp(emailValidate));
  };

  const handleOTPChange = (e) => {
    dispatch(setOtp(e));
    dispatch(setOtpError(""));
  };

  const handleModalClose = () => {
    dispatch(controlMoldalAsync(false));
  };

  useEffect(() => {
    dispatch(setResetShowMsg());
  }, []);

  return (
    <OTPContainer>
      <h2>Please check your email </h2>
      <p>We've sent a code to {emailValidate}</p>
      <InputsContainer>
        <OtpInput
          value={otp}
          onChange={handleOTPChange}
          numInputs={6}
          isInputNum
          inputStyle={{ width: "40px" }}
        />
      </InputsContainer>
      <p>
        Didn't get a code?{" "}
        <a href="#" onClick={handleResendOtp}>
          Click to resend
        </a>
      </p>
      <RequestMessage
        isSubmiting={isSubmiting}
        showMessage={showMessage}
        errorMsgRequest={errorMsgRequest}
        text="Your OTP has been Succesfully Send to Email"
      />
      {/* {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>} */}
      <ButtonsContainer>
        <Button size="md" label="Cancel" onClick={handleModalClose} />
        <Button
          size="md"
          primary="primary"
          label="Verify"
          type="submit"
          onClick={handleSubmit}
        />
      </ButtonsContainer>
    </OTPContainer>
  );
}

export default OTPModal;
