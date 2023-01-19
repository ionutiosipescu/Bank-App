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
  FormContainerInputs,
} from "./DepositControlerCard.style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectDepositAction } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import { selectDepositForm } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";
import { setDepositAction } from "../../../state-management/Dashboard/services/helpers/depositsHelper/depositsHelper.action";
import { setDepositForm } from "../../../state-management/Dashboard/services/helpers/depositsHelper/depositsHelper.action";
import { debounce } from "debounce";
import { depositSchema } from "../ValidationSchema/ValidationSchemaDeposit";
import DatePickerField from "../../../components/CustomInputs/CustomDatePicker";
import { setDepositArr } from "../../../state-management/Dashboard/services/helpers/depositsHelper/depositsHelper.action";
import { selectDepositArr } from "../../../state-management/Dashboard/services/helpers/depositsHelper/deposits.selector";

function DepositsControlerCard() {
  const dispatch = useDispatch();
  const depositAction = useSelector(selectDepositAction);
  const depositFormData = useSelector(selectDepositForm);
  const depositArr = useSelector(selectDepositArr);

  const setData = debounce((e) => {
    dispatch(setDepositForm(depositFormData, e));
  }, 500);

  const onSubmit = () => {
    dispatch(setDepositArr(depositAction, depositFormData, depositArr));
  };

  const handleDepositAction = (type) => {
    dispatch(setDepositAction(type));
  };

  return (
    <ServiceInputsCardDeposit>
      <CardHeader>
        <h2>Acount Actions</h2>
      </CardHeader>
      <Formik
        validationSchema={depositSchema}
        initialValues={{ ...depositFormData }}
        onSubmit={onSubmit}
      >
        <FormContainerDeposits>
          <BtnContainerControler>
            <Button
              label="Deposit"
              size="xl"
              primary={true}
              type="button"
              onClick={() => handleDepositAction("Deposit")}
            />
            <Button
              label="Windraw"
              size="xl"
              type="button"
              onClick={() => handleDepositAction("Windraw")}
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
            <CustomInput
              label="Amount"
              name="amount"
              type="number"
              placeholder="Enter your Amount"
              setData={setData}
            />
          </FormContainerInputs>
          <BtnContainerSubmitControler>
            <Button label="Action" size="xl" primary={true} type="submit" />
          </BtnContainerSubmitControler>
        </FormContainerDeposits>
      </Formik>
    </ServiceInputsCardDeposit>
  );
}

export default DepositsControlerCard;
