import React from "react";
import Button from "../UI/Button/Button";
import { InputsContainer, OTPContainer, OTPInput } from "./OTPModal.style";
import { ButtonsContainer } from "./../../features/cardsPage/CardPages/NewCard/NewCardAvailable/NewCardAvailable.style";
import { useState } from "react";
import { useRef } from "react";

function OTPModal(props) {
  const { handleModalClose, handleSubmit } = props;

  const [digits, setDigits] = useState(["", "", "", "", "", ""]);
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleDigitChange = (index, event) => {
    const value = event.target.value;
    const newDigits = [...digits];
    newDigits[index] = value;
    setDigits(newDigits);

    if (value.length > 0 && index < 5) {
      refs[index + 1].current.focus();
    }
  };

  return (
    <OTPContainer>
      <h2>Please check your email </h2>
      <p>We've sent a code to {`email@gmail.com`}</p>
      <InputsContainer>
        <OTPInput
          maxLength={1}
          noArrows
          onChange={(event) => handleDigitChange(0, event)}
          ref={refs[0]}
        />

        <OTPInput
          maxLength={1}
          noArrows
          onChange={(event) => handleDigitChange(1, event)}
          ref={refs[1]}
        />
        <OTPInput
          maxLength={1}
          noArrows
          onChange={(event) => handleDigitChange(2, event)}
          ref={refs[2]}
        />
        <OTPInput
          maxLength={1}
          noArrows
          onChange={(event) => handleDigitChange(3, event)}
          ref={refs[3]}
        />
        <OTPInput
          maxLength={1}
          noArrows
          onChange={(event) => handleDigitChange(4, event)}
          ref={refs[4]}
        />
        <OTPInput
          maxLength={1}
          noArrows
          onChange={(event) => handleDigitChange(5, event)}
          ref={refs[5]}
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
