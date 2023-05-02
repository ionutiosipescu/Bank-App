import React, { useEffect } from "react";
import OtpInput from "react-otp-input";
import {
  OTPContainer,
  InputsContainer,
} from "../../../components/OTPModal/OTPModal.style";
import Button from "../../../components/UI/Button/Button";
import { ButtonsContainer } from "../../cardsPage/CardPages/NewCard/NewCardAvailable/NewCardAvailable.style";
import { useSelector, useDispatch } from "react-redux";
import { setOtp } from "../../../state-management/Auth/register/register.actions";
import { setOtpError } from "../../../state-management/Auth/register/register.actions";
import { controlMoldalAsync } from "../../../state-management/Auth/register/register.actions";
import { setResetShowMsg } from "../../../state-management/Auth/register/register.actions";
import { VerifyOtp } from "../../../state-management/Auth/register/register.service";
import { ResendOtp } from "../../../state-management/Auth/register/register.service";
import {
  selectEmailValidate,
  selectOtp,
  selectErrorOtp,
  selectIsSubmitingOtp,
  selectShowMessageOtp,
} from "../../../state-management/Auth/register/register.selector";
import RequestMessage from "../../../components/RequestMessage/RequestMessage";
import { selectCsrf } from "../../../state-management/Auth/login/login.selector";

function OtpConfirmModal() {
  const dispatch = useDispatch();
  const otp = useSelector(selectOtp);
  const emailValidate = useSelector(selectEmailValidate);
  const csrf = useSelector(selectCsrf);

  const errorMsgRequest = useSelector(selectErrorOtp);
  const isSubmiting = useSelector(selectIsSubmitingOtp);
  const showMessage = useSelector(selectShowMessageOtp);

  const handleSubmit = () => {
    if (otp.split("").length === 6) {
      dispatch(VerifyOtp(otp, emailValidate, csrf));
    } else {
      dispatch(setOtpError("Invalid OTP"));
    }
  };

  const handleResendOtp = () => {
    dispatch(ResendOtp(emailValidate, csrf));
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

export default OtpConfirmModal;
