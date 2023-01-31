import React from "react";
import RadioButtonsPlan from "../../../../../components/CustomInputs/CustomRadioInputGroupPlan";
import { Formik, Form } from "formik";
import { options } from "../../../../../utils/data/plancardregisterData";
import { ErrorMsg } from "../../../../../components/Errors/Auth/ErrorMsg.style";
import { selectPlanObject } from "../../../../../state-management/Auth/registerhelper/registerhelper.selector";
import { CardPlansContainer } from "./NewCardPlans.style";
import "./NewCardPlans.css";
import { FormContainerCard } from "./NewCardPlans.style";
import { RowNewCardSection } from "./NewCardPlans.style";
import CustomCheckbox from "../../../../../components/CustomInputs/CustomCheckbox";
import CustomInput from "../../../../../components/CustomInputs/CustomInput";
import Button from "../../../../../components/UI/Button/Button";
import { ButtonNewCard } from "./NewCardPlans.style";
import { useSelector } from "react-redux";
import { selectCard } from "../../../../../state-management/Dashboard/cards/cards.selector";
import { cardSchema } from "../../../ValidationSchema/ValidationSchema";
import { useDispatch } from "react-redux";
import { setCard } from "../../../../../state-management/Dashboard/cards/cards.action";

function NewCardPlans() {
  const dispatch = useDispatch();
  const card = useSelector(selectCard);
  const plan = useSelector(selectPlanObject);

  const handleradio = (e) => {
    // dispatch(updateRegisterPlanAsync(userPlan, planData, index, e));
    console.log(e);
  };

  const setData = (e) => {
    dispatch(setCard(card, e));
  };

  const handleSubmit = () => {
    console.log(card);
  };
  return (
    <CardPlansContainer>
      <h2>Chouse your new Plan</h2>
      <Formik
        initialValues={{ ...card }}
        validateOnBlur={false}
        validateOnChange={true}
        validationSchema={cardSchema}
        // onSubmit={(values, actions) => {
        // console.log(values);
        //   if (userPlan.length === 0) {
        //     actions.setFieldError("userPlan", "At least one item is required");
        //   } else {
        //     dispatch(setRegisterObjectAditionals(registerHelper));
        //     dispatch(setRegisterUserObject(registerHelper));
        //     dispatch(setStep(step + 1));
        //   }
        // }}
        onSubmit={handleSubmit}
      >
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
          <FormContainerCard>
            <h2>Account Delivery Address </h2>
            <RowNewCardSection>
              <CustomInput
                label="Street"
                name="street"
                type="text"
                placeholder="Enter your address"
                large
                setData={setData}
              />
              <CustomInput
                label="Postal Code"
                name="postal"
                type="number"
                placeholder="Enter your postal code"
                large
                setData={setData}
              />
            </RowNewCardSection>
            <RowNewCardSection>
              <CustomInput
                label="City"
                name="city"
                type="text"
                placeholder="Enter your city"
                large
                setData={setData}
              />
              <CustomInput
                label="Phone Number"
                name="phone"
                type="number"
                placeholder="Enter your phone number"
                large
                setData={setData}
              />
            </RowNewCardSection>
            <CustomCheckbox
              label="I confirm the address details"
              type="checkbox"
              name="acceptAddress"
              setData={setData}
            />
          </FormContainerCard>
          <ErrorMsg component="div" name="userPlan" />
          <ButtonNewCard
            label="Create New Account"
            size="xl"
            primary="primary"
            type="submit"
          />
        </Form>
      </Formik>
    </CardPlansContainer>
  );
}

export default NewCardPlans;
