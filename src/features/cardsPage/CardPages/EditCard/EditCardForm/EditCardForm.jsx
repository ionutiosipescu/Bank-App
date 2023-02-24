import React, { useEffect } from "react";
import { CardPlansContainer } from "../../NewCard/NewCardPlans/NewCardPlans.style";
import RadioButtonsPlan from "../../../../../components/CustomInputs/CustomRadioInputGroupPlan";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { selectPlanObject } from "../../../../../state-management/Auth/register/register.selector";
import { options } from "../../../../../utils/data/plancardregisterData";
import { useDispatch } from "react-redux";
import { setCardPlanEdit } from "../../../../../state-management/Dashboard/cards/cards.action";
import { selectCardEdit } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { ErrorMsg } from "../../../../../components/Errors/Auth/ErrorMsg.style";
import { useState } from "react";
import { asyncCardPlanEdit } from "../../../../../state-management/Dashboard/cards/cards.action";
import { TitleBox, EditCardError } from "./EditCardForm.style";
import { selectCurrentCardEdit } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { selectCardArr } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { asyncSaveChanges } from "../../../../../state-management/Dashboard/cards/cards.action";

function EditCardForm() {
  const dispatch = useDispatch();
  const cardArr = useSelector(selectCardArr);
  const cardEdit = useSelector(selectCurrentCardEdit);
  const { errorMsg } = cardEdit;
  const plan = useSelector(selectPlanObject);
  const handleradio = (e) => {
    dispatch(asyncCardPlanEdit(cardEdit, e, cardArr));
  };

  return (
    <CardPlansContainer>
      <TitleBox>
        <h2>Chouse your new Plan</h2>
        {errorMsg ? <EditCardError>{errorMsg}</EditCardError> : <></>}
      </TitleBox>
      <Formik initialValues={{ ...cardEdit }}>
        <Form className="card-form">
          <RadioButtonsPlan
            size="card"
            type="radio"
            label="Type Of Plan"
            name={plan.namePlan}
            options={options}
            handleradio={handleradio}
            plan={plan}
            typeOfPlan={plan.typeOfPlan}
          />
        </Form>
      </Formik>
    </CardPlansContainer>
  );
}

export default EditCardForm;
