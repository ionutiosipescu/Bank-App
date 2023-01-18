import React from "react";
import {
  CardHeader,
  ServiceCard,
} from "../../../components/UI/Card/Card.style";
import {
  TransferBody,
  TransferInputSection,
  TransferInputWrapper,
} from "./TransfersInputCard.style";
import Button from "./../../../components/UI/Button/Button";
import Input from "./../../../components/UI/Input/Input";
import { useSelector } from "react-redux";
import { selectTransferHelper } from "../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";

function TransferInputsCard() {
  const selectedAccount = useSelector(selectTransferHelper);
  const { image, owner, email } = selectedAccount;

  return (
    <ServiceCard>
      <CardHeader>
        <h2>New Transfer</h2>
      </CardHeader>
      <TransferBody>
        <TransferInputWrapper>
          <TransferInputSection>
            <Input label="Recipient Name" large value={owner} />
            <Input label="Recipient Email" large value={email} />
          </TransferInputSection>
          <TransferInputSection>
            <Input label="Amount" large />
            <Input label="Message" large />
          </TransferInputSection>
        </TransferInputWrapper>
        <Button label="Send" size="xl" primary={true} />
      </TransferBody>
    </ServiceCard>
  );
}

export default TransferInputsCard;
