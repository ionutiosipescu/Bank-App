import React from "react";
import { TransferWrapper } from "./NewTransfer.style";
import TransferInputsCard from "../../features/transfers/TransfersInputCard/TransferInputsCard";
import TransfersRecipientCard from "../../features/transfers/TransfersRecipientCard/TransfersRecipientCard";

function NewTransfer() {
  return (
    <TransferWrapper>
      <TransferInputsCard />
      <TransfersRecipientCard />
    </TransferWrapper>
  );
}

export default NewTransfer;
