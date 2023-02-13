import React from "react";
// Style
import { LoanModalContainer } from "./LoanModal.style";
// Components
import LoanStatusModal from "./LoanStatusModals/AcceptedModal/LoanStatusModal";

function LoanModal({ handleClick, ...props }) {
  return (
    <LoanModalContainer>
      <LoanStatusModal handleClick={handleClick} />
    </LoanModalContainer>
  );
}

export default LoanModal;
