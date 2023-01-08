import React from "react";
import {
  TransferBody,
  TransferInputWrapper,
  TransferWrapper,
} from "./NewTransfer.style";
import {
  ServiceCard,
  ServiceInputsCard,
} from "./../../components/UI/Card/Card.style";
import Input from "../../components/UI/Input/Input";
import { CardHeader } from "../../components/TopCard/TopCard.style";
import Button from "../../components/UI/Button/Button";

function NewTransfer() {
  return (
    <TransferWrapper>
      <ServiceCard>
        <CardHeader>
          <h2>New Transfer</h2>
        </CardHeader>
        <TransferBody>
          <TransferInputWrapper>
            <div>
              <Input label="Transaction Number" />
              <Input label="Recipient" />
              <Input label="Amount" />
              <Input label="Due Date" />
            </div>
            <div>
              <Input label="Date" />
              <Input label="Email" />
              <Input label="Message" />
              <Input label="Pin" />
            </div>
          </TransferInputWrapper>
          <div>
            <input type="checkbox" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
              officiis.
            </p>
          </div>
          <Button size="md" label="Send" primary={true} />
        </TransferBody>
      </ServiceCard>
      <ServiceInputsCard></ServiceInputsCard>
    </TransferWrapper>
  );
}

export default NewTransfer;
