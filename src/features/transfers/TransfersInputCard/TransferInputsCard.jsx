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
import { useDispatch } from "react-redux";
import { selectTransferHelper } from "../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";
import { selectTransferForm } from "../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.selector";
import { setTransferForm } from "../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.action";
import { Form, Formik } from "formik";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import CustomPassword from "../../../components/CustomInputs/CustomPassword";
import { transferSchema } from "../ValidationSchema/ValidationSchema";
import { fetchTransferData } from "../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.action";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { setTransformAccount } from "../../../state-management/Dashboard/services/helpers/transfersHelper/transferHelper.action";

function TransferInputsCard() {
  const dispatch = useDispatch();
  const transferForm = useSelector(selectTransferForm);
  const selectedAccount = useSelector(selectTransferHelper);
  const currentUser = useSelector(selectCurrentUser);
  // const { image, owner, email } = selectedAccount;
  const { email, name, details, transfer } = transferForm;
  // console.log(transferForm);

  const setData = (e) => {
    dispatch(setTransferForm(transferForm, e));
  };

  const handleSubmit = () => {
    dispatch(fetchTransferData(transferForm, currentUser));
  };

  const setDataToggle = (account) => {
    dispatch(setTransformAccount(transferForm, account));
  };

  return (
    <ServiceCard>
      <CardHeader>
        <h2>New Transfer</h2>
      </CardHeader>
      <TransferBody>
        <TransferInputWrapper>
          <Formik
            initialValues={{ ...transferForm }}
            onSubmit={handleSubmit}
            validationSchema={transferSchema}
          >
            <Form>
              <TransferInputSection>
                <CustomInput
                  name="name"
                  label="Recipient Name"
                  large
                  type="text"
                  placeholder="Enter your username"
                  setData={setData}
                  value={name || ""}
                />
                <CustomInput
                  name="email"
                  label="Email"
                  large
                  type="email"
                  placeholder="Enter your email"
                  setData={setData}
                  value={email || ""}
                />
              </TransferInputSection>
              <TransferInputSection>
                <CustomInput
                  name="transfer"
                  label="Amount"
                  large
                  type="number"
                  placeholder="Enter your phone number"
                  setData={setData}
                />
                <CustomInput
                  name="details"
                  label="Message"
                  large
                  type="text"
                  placeholder="Enter your transfer details"
                  setData={setData}
                />
              </TransferInputSection>
              <TransferInputSection>
                <RadioButton
                  firstText="euro"
                  secondText="ron"
                  name="account"
                  setDataToggle={setDataToggle}
                />
              </TransferInputSection>
              <Button label="Send" size="xl" primary={true} type="submit" />
            </Form>
          </Formik>
        </TransferInputWrapper>
      </TransferBody>
    </ServiceCard>
  );
}

export default TransferInputsCard;
