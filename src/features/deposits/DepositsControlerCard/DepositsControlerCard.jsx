import React, { useEffect, useState } from "react";
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
  FormContainerInputs,
  SelectAccountToggle,
  SelectAccountToggleContainer,
} from "./DepositControlerCard.style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectDepositAction } from "../../../state-management/Dashboard/services/deposit/deposit.selector";
import { selectDepositForm } from "../../../state-management/Dashboard/services/deposit/deposit.selector";
import { setDepositAction } from "../../../state-management/Dashboard/services/deposit/deposit.action";
import { setDepositForm } from "../../../state-management/Dashboard/services/deposit/deposit.action";
import { debounce } from "debounce";
import { depositSchema } from "../ValidationSchema/ValidationSchemaDeposit";
import DatePickerField from "../../../components/CustomInputs/CustomDatePicker";
import { selectDepositArr } from "../../../state-management/Dashboard/services/deposit/deposit.selector";
import RadioButtonsExchange from "../../../components/CustomInputs/CustomRadioInputGroupExchange";
import { exchangeRadioBtns } from "../../../utils/data/dummyData";
import { setDepositAccount } from "../../../state-management/Dashboard/services/deposit/deposit.action";
import { fetchDepositData } from "../../../state-management/Dashboard/services/deposit/deposit.service";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import {
  selectDeposit,
  selectError,
  selectIsSubmiting,
  selectShowMessage,
} from "../../../state-management/Dashboard/services/deposit/deposit.selector";
import { selectCsrf } from "../../../state-management/Auth/login/login.selector";
import SmallDropdown from "../../cardsPage/Dropdown/Dropdown";
import RequestMessage from "../../../components/RequestMessage/RequestMessage";
import { setResetShowMsg } from "../../../state-management/Dashboard/services/deposit/deposit.action";

function DepositsControlerCard() {
  const options = [
    { value: "ron", label: "ron" },
    { value: "euro", label: "euro" },
  ];
  const dispatch = useDispatch();
  const depositAction = useSelector(selectDepositAction);
  const depositFormData = useSelector(selectDepositForm);
  const depositArr = useSelector(selectDepositArr);
  const currentUserData = useSelector(selectCurrentUser);
  const depositDataReducer = useSelector(selectDeposit);
  const csrf = useSelector(selectCsrf);

  const errorMsgRequest = useSelector(selectError);
  const isSubmiting = useSelector(selectIsSubmiting);
  const showMessage = useSelector(selectShowMessage);

  const setData = debounce((e) => {
    dispatch(setDepositForm(depositFormData, e));
  }, 500);

  const onSubmit = () => {
    dispatch(fetchDepositData(depositDataReducer, currentUserData, csrf));
  };
  // const setDataToggle = (account) => {
  //   dispatch(setDepositAccount(depositFormData, account));
  // };

  // const handleDepositAction = (type) => {
  //   dispatch(setDepositAction(type));
  // };

  const setDataRadio = (e) => {
    // console.log(depositAction, e.target.value);
    dispatch(setDepositAction(e));
  };

  useEffect(() => {
    dispatch(setResetShowMsg());
  }, []);
  return (
    <ServiceInputsCardDeposit>
      <CardHeader>
        <h2>Acount Actions</h2>
      </CardHeader>
      <Formik
        validationSchema={depositSchema}
        validateOnBlur={false}
        validateOnChange={true}
        initialValues={{ ...depositFormData }}
        onSubmit={onSubmit}
      >
        <FormContainerDeposits>
          <BtnContainerControler className="plan-form">
            <RadioButtonsExchange
              type="radio"
              name="actions"
              options={exchangeRadioBtns}
              depositAction={depositAction}
              setDataRadio={setDataRadio}
            />
          </BtnContainerControler>
          <FormContainerInputs>
            <CustomInput
              label="Card Number"
              name="card_number"
              type="number"
              placeholder="Enter your Card Number"
              setData={setData}
            />
            <CustomInput
              label="Card Name"
              name="card_name"
              type="text"
              placeholder="Enter your Card Name"
              setData={setData}
            />
            <RegisterFormPart>
              <DatePickerField
                label="Expiration Date"
                name="exp_date"
                setData={setData}
              />
              <CustomInput
                label="Card CVC"
                name="cvc"
                type="number"
                placeholder="Enter your Card CVC"
                setData={setData}
              />
            </RegisterFormPart>
            <RegisterFormPart>
              <SelectAccountToggleContainer>
                <span>Select your account: </span>
                <SmallDropdown
                  options={options}
                  selectedOption={depositDataReducer.depositObj.account}
                  handleChange={(e) =>
                    dispatch(
                      setDepositAccount(depositDataReducer.depositObj, e)
                    )
                  }
                />
              </SelectAccountToggleContainer>
              <CustomInput
                label="Amount"
                name="amount"
                type="number"
                placeholder="Enter your Amount"
                setData={setData}
              />
            </RegisterFormPart>
          </FormContainerInputs>
          <RequestMessage
            isSubmiting={isSubmiting}
            showMessage={showMessage}
            errorMsgRequest={errorMsgRequest}
            text="Your Deposit has been Succesfuly Added"
          />
          <BtnContainerSubmitControler>
            <Button label="Accept" size="xl" primary="primary" type="submit" />
          </BtnContainerSubmitControler>
        </FormContainerDeposits>
      </Formik>
    </ServiceInputsCardDeposit>
  );
}

export default DepositsControlerCard;
