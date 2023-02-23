import React, { useEffect } from "react";
import Button from "../../../components/UI/Button/Button";
import {
  CornerArt,
  ServiceInputsCard,
} from "../../../components/UI/Card/Card.style";
import Input from "../../../components/UI/Input/Input";
import {
  InputCardSection,
  InputContainer,
  InputWrapper,
} from "./SavingsInputCard.style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setSavingForm,
  setResetShowMsg,
} from "../../../state-management/Dashboard/services/saving/saving.action";
import { selectSavingForm } from "../../../state-management/Dashboard/services/saving/saving.selector";
import { selectSavingArr } from "../../../state-management/Dashboard/services/saving/saving.selector";
import { Formik, Form } from "formik";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import {
  SavingFormContainer,
  SavingInputsContainer,
} from "./SavingsInputCard.style";
import { fetchSavingData } from "../../../state-management/Dashboard/services/saving/saving.service";
import { selectCurrentUser } from "../../../state-management/Dashboard/userData/userData.selector";
import {
  selectSavingData,
  selectError,
  selectIsSubmiting,
  selectShowMessage,
} from "../../../state-management/Dashboard/services/saving/saving.selector";
import { savingSchema } from "../ValidationSchema/ValidationSchemaSaving";
import Spinner from "../../../components/Spinner/Spinner";
import StatusMessage from "../../../components/UI/StatusMessage/StatusMessage";
import RequestMessage from "../../../components/RequestMessage/RequestMessage";

function SavingsInputCard() {
  const dispatch = useDispatch();
  const savingFromData = useSelector(selectSavingForm);
  const savingArr = useSelector(selectSavingArr);
  const savingData = useSelector(selectSavingData);
  const currentUserData = useSelector(selectCurrentUser);

  const errorMsgRequest = useSelector(selectError);
  const isSubmiting = useSelector(selectIsSubmiting);
  const showMessage = useSelector(selectShowMessage);

  const { details, transfer } = savingFromData;

  const setData = (e) => {
    dispatch(setSavingForm(savingFromData, e));
  };

  const onSubmit = () => {
    dispatch(fetchSavingData(savingFromData, savingArr, currentUserData));
  };

  useEffect(() => {
    dispatch(setResetShowMsg());
  }, []);

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
              value={details || ""}
              tall
            />
            <CustomInput
              label="First Top-up"
              type="number"
              name="transfer"
              placeholder="Enter your first saving"
              setData={setData}
              value={transfer || ""}
              tall
            />
          </SavingInputsContainer>
          <RequestMessage
            isSubmiting={isSubmiting}
            showMessage={showMessage}
            errorMsgRequest={errorMsgRequest}
            text="Your Saving has been Succesfuly Added"
          />
          <Button
            label="Add Saving"
            size="xl"
            primary="primary"
            type="submit"
          />
        </SavingFormContainer>
      </Formik>
      <CornerArt bottom right />
    </ServiceInputsCard>
  );
}

export default SavingsInputCard;
