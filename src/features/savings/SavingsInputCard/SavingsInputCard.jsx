import React from "react";
import Button from "../../../components/UI/Button/Button";
import { ServiceInputsCard } from "../../../components/UI/Card/Card.style";
import Input from "../../../components/UI/Input/Input";
import {
  InputCardSection,
  InputContainer,
  InputWrapper,
} from "./SavingsInputCard.style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSavingAction } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.action";
import { setSavingArr } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.action";
import { setSavingForm } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.action";
import { selectSavingAction } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.selector";
import { selectSavingForm } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.selector";
import { selectSavingArr } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.selector";
import { Formik, Form } from "formik";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import {
  SavingFormContainer,
  SavingInputsContainer,
} from "./SavingsInputCard.style";
import { fetchSavingData } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.action";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import { selectSavingData } from "../../../state-management/Dashboard/services/helpers/savingsHelper/savingsHelper.selector";
import { savingSchema } from "../ValidationSchema/ValidationSchemaSaving";

function SavingsInputCard() {
  const dispatch = useDispatch();
  const savingFromData = useSelector(selectSavingForm);
  const savingArr = useSelector(selectSavingArr);
  const savingData = useSelector(selectSavingData);
  const currentUserData = useSelector(selectCurrentUser);
  // if i dont have currentUserObj app crash
  // const idAccount = currentUserData.account[0].id;
  // const id = idAccount.toString();
  // console.log(id);

  const setData = (e) => {
    dispatch(setSavingForm(savingFromData, e));
  };

  const onSubmit = () => {
    dispatch(fetchSavingData(savingFromData, savingArr, currentUserData));
  };

  return (
    <ServiceInputsCard type="savings">
      <h2>New Saving</h2>
      <Formik
        initialValues={{ ...savingFromData }}
        onSubmit={onSubmit}
        validationSchema={savingSchema}
      >
        <SavingFormContainer>
          <SavingInputsContainer>
            <CustomInput
              label="Saving Purpose"
              type="text"
              name="details"
              placeholder="Enter your Saving Purpose"
              setData={setData}
              tall
            />
            <CustomInput
              label="First Top-up"
              type="number"
              name="transfer"
              placeholder="Enter your first saving"
              setData={setData}
              tall
            />
          </SavingInputsContainer>
          <Button label="Add Saving" size="xl" primary={true} type="submit" />
        </SavingFormContainer>
      </Formik>
    </ServiceInputsCard>
  );
}

export default SavingsInputCard;
