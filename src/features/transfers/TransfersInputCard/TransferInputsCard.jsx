import React, { useEffect } from "react";
import {
  CardHeader,
  ServiceCard,
} from "../../../components/UI/Card/Card.style";
import {
  TransferBody,
  TransferInputSection,
  TransferInputWrapper,
  TransferForm,
  TransferBtnBox,
} from "./TransfersInputCard.style";
import Button from "./../../../components/UI/Button/Button";
import Input from "./../../../components/UI/Input/Input";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selecttransferStorage } from "../../../state-management/Dashboard/services/transfer/transfer.selector";
import { selectTransferForm } from "../../../state-management/Dashboard/services/transfer/transfer.selector";
import { setTransferForm } from "../../../state-management/Dashboard/services/transfer/transfer.action";
import { Form, Formik } from "formik";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import CustomPassword from "../../../components/CustomInputs/CustomPassword";
import { transferSchema } from "../ValidationSchema/ValidationSchema";
import { fetchTransferData } from "../../../state-management/Dashboard/services/transfer/transfer.service";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import RadioButton from "../../../components/RadioButton/RadioButton";
import { setTransformAccount } from "../../../state-management/Dashboard/services/transfer/transfer.action";
import {
  selectTransferArr,
  selectError,
  selectIsSubmiting,
  selectShowMessage,
  selectTransfer,
} from "../../../state-management/Dashboard/services/transfer/transfer.selector";
import RequestMessage from "../../../components/RequestMessage/RequestMessage";
import { setResetShowMsg } from "../../../state-management/Dashboard/services/transfer/transfer.action";
import { selectCsrf } from "../../../state-management/Auth/login/login.selector";

function TransferInputsCard() {
  const dispatch = useDispatch();
  const transferRedux = useSelector(selectTransfer);
  const transferForm = useSelector(selectTransferForm);
  const transferArr = useSelector(selectTransferArr);
  const selectedAccount = useSelector(selecttransferStorage);
  const currentUser = useSelector(selectCurrentUser);
  const csrf = useSelector(selectCsrf);

  const errorMsgRequest = useSelector(selectError);
  const isSubmiting = useSelector(selectIsSubmiting);
  const showMessage = useSelector(selectShowMessage);

  // const { image, owner, email } = selectedAccount;
  const { email, name, details, transfer, account } = transferForm;
  // console.log(transferForm);

  const setData = (e) => {
    dispatch(setTransferForm(transferForm, e));
  };

  const handleSubmit = () => {
    dispatch(fetchTransferData(transferRedux, currentUser, csrf));
  };

  const setDataToggle = (account) => {
    dispatch(setTransformAccount(transferForm, account));
  };

  useEffect(() => {
    dispatch(setResetShowMsg());
  }, []);

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
            <TransferForm>
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
                  placeholder="Enter your transfer amount"
                  value={transfer || ""}
                  setData={setData}
                />
                <CustomInput
                  name="details"
                  label="Message"
                  large
                  type="text"
                  placeholder="Enter your transfer details"
                  value={details || ""}
                  setData={setData}
                />
              </TransferInputSection>
              <TransferInputSection>
                <RadioButton
                  firstText="euro"
                  secondText="ron"
                  name="account"
                  value={account || ""}
                  setDataToggle={setDataToggle}
                />
              </TransferInputSection>
              <RequestMessage
                isSubmiting={isSubmiting}
                showMessage={showMessage}
                errorMsgRequest={errorMsgRequest}
                text="Your Transfer has been Succesfuly Added"
              />
              <TransferBtnBox>
                <Button label="Send" size="xl" primary={true} type="submit" />
              </TransferBtnBox>
            </TransferForm>
          </Formik>
        </TransferInputWrapper>
      </TransferBody>
    </ServiceCard>
  );
}

export default TransferInputsCard;
