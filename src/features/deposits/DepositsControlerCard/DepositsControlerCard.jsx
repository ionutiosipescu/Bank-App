import React from "react";
import { ServiceInputsCardDeposit } from "../../../components/UI/Card/Card.style";
import { ExchangeInputContainer } from "../../exchange/ExchangeInputCard/ExchangeInputCard.style";
import { InfoSection } from "../../exchange/ExchangeInputCard/ExchangeInputCard.style";
import DropDown from "../../../components/DropDown/DropDown";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import { Formik } from "formik";
import { RegisterFormPart } from "../../register/FormRegister/FormRegister.style";
import { CardHeader } from "../../../components/UI/Card/Card.style";
import {
  FormContainerDeposits,
  BtnContainerControler,
  BtnContainerSubmitControler,
} from "./DepositControlerCard.style";

function DepositsControlerCard() {
  return (
    <ServiceInputsCardDeposit>
      <CardHeader>
        <h2>Deposit</h2>
      </CardHeader>
      <Formik>
        <FormContainerDeposits>
          <BtnContainerControler>
            <Button label="Deposit" size="xl" primary={true} />
            <Button label="Windraw" size="xl" primary={true} />
          </BtnContainerControler>
          <div>
            <CustomInput
              label="Card Number"
              name="card_number"
              type="number"
              placeholder="Enter your Card Number"
              // setData={setData}
              // value={serie || ""}
            />
            <CustomInput
              label="Card Name"
              name="card_name"
              type="number"
              placeholder="Enter your Card Name"
              // setData={setData}
              // value={serie || ""}
            />
            <RegisterFormPart>
              <CustomInput
                label="Expiration Date"
                name="exp_date"
                type="number"
                placeholder="Enter your Expiration Date"
                // setData={setData}
                // value={serie || ""}
              />
              <CustomInput
                label="Card CVC"
                name="cvc"
                type="number"
                placeholder="Enter your Card CVC"
                // setData={setData}
                // value={serie || ""}
              />
            </RegisterFormPart>
            <CustomInput
              label="Amount"
              name="amount"
              type="number"
              placeholder="Enter your Amount"
              // setData={setData}
              // value={serie || ""}
            />
          </div>
          <BtnContainerSubmitControler>
            <Button label="Deposit" size="xl" primary={true} />
          </BtnContainerSubmitControler>
        </FormContainerDeposits>
      </Formik>
    </ServiceInputsCardDeposit>
  );
}

export default DepositsControlerCard;
