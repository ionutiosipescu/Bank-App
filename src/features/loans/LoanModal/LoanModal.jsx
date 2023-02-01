import React from "react";
import Button from "../../../components/UI/Button/Button";
import { LoanModalContainer } from "./LoanModal.style";

function LoanModal({ approved, ...props }) {
  const { handleClick } = props;

  return (
    <LoanModalContainer>
      <h1>
        {approved === "yes"
          ? "Congrats! Your loan was approved!"
          : "Wua wua wuaaaa, too bad, you are poor and nobody loves you!"}{" "}
      </h1>
      <Button
        size="xl"
        primary="primary"
        label="Continue"
        handleClick={handleClick}
      />
    </LoanModalContainer>
  );
}

export default LoanModal;
