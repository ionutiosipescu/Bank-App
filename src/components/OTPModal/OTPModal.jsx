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
import { setOtp } from "../../state-management/Auth/loginUser/loginUser.action";
import { selectOtp } from "../../state-management/Auth/loginUser/loginUser.selector";
import { Formik, Form } from "formik";
import { ErrorMsg } from "../Errors/Auth/ErrorMsg.style";
import { selectOtpError } from "../../state-management/Auth/loginUser/loginUser.selector";
import { setOtpError } from "../../state-management/Auth/loginUser/loginUser.action";
import { controlMoldalAsync } from "../../state-management/Auth/loginUser/loginUser.action";

function OTPModal(props) {
  const dispatch = useDispatch();
  const errorMsg = useSelector(selectOtpError);
  const otp = useSelector(selectOtp);

  const handleSubmit = () => {
    if (otp.split("").length === 6) {
      dispatch(controlMoldalAsync(false));
      console.log("Succes");
    } else {
      dispatch(setOtpError("Invalid OTP"));
    }
  };

  const handleOTPChange = (e) => {
    dispatch(setOtp(e));
    dispatch(setOtpError(""));
  };

  const handleModalClose = () => {
    dispatch(controlMoldalAsync(false));
  };

  // useEffect(() => {
  //   console.log(otp);
  // }, [otp]);

  return (
    <OTPContainer>
      <h2>Please check your email </h2>
      <p>We've sent a code to {`email@gmail.com`}</p>
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
        Didn't get a code? <a href="#">Click to resend</a>
      </p>
      {errorMsg ? <ErrorMsg>{errorMsg}</ErrorMsg> : <></>}
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
