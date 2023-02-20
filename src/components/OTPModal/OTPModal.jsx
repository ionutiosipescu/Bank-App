import React from "react";
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
// import { OtpInput } from "react-otp-input";

function OTPModal(props) {
  const { handleModalClose, handleSubmit } = props;

  const [OTP, setOTP] = useState("");

  console.log(OTP);

  const handleOTPChange = (event) => {
    setOTP(event);
  };

  return (
    <OTPContainer>
      <h2>Please check your email </h2>
      <p>We've sent a code to {`email@gmail.com`}</p>
      <InputsContainer>
        <OtpInput
          value={OTP}
          onChange={handleOTPChange}
          numInputs={6}
          isInputNum
          inputStyle={{ width: "40px" }}
        />
      </InputsContainer>
      <p>
        Didn't get a code? <a href="#">Click to resend</a>
      </p>
      <ButtonsContainer>
        <Button size="md" label="Cancel" onClick={handleModalClose} />
        <Button
          size="md"
          primary="primary"
          label="Verify"
          onClick={handleSubmit}
        />
      </ButtonsContainer>
    </OTPContainer>
  );
}

export default OTPModal;
