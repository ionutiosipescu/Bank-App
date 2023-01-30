import React from "react";
import RadioButtonsPlan from "../../../../../components/CustomInputs/CustomRadioInputGroupPlan";
import { Formik, Form } from "formik";
import { options } from "../../../../../utils/data/plancardregisterData";
import { ErrorMsg } from "../../../../../components/Errors/Auth/ErrorMsg.style";
import { selectPlanObject } from "../../../../../state-management/Auth/registerhelper/registerhelper.selector";
import { useSelector } from "react-redux";
import { CardPlansContainer } from "./NewCardPlans.style";
import "./NewCardPlans.css";
import { FormContainerCard } from "./NewCardPlans.style";
import { RowNewCardSection } from "./NewCardPlans.style";
import CustomCheckbox from "../../../../../components/CustomInputs/CustomCheckbox";
import CustomInput from "../../../../../components/CustomInputs/CustomInput";
import Button from "../../../../../components/UI/Button/Button";
import { ButtonNewCard } from "./NewCardPlans.style";
function NewCardPlans() {
  const plan = useSelector(selectPlanObject);

  const handleradio = (e) => {
    // dispatch(updateRegisterPlanAsync(userPlan, planData, index, e));
    console.log(e);
  };
  return (
    <CardPlansContainer>
      <h2>Chouse your new Plan</h2>
      <Formik
      // initialValues={{ userPlan }}
      // validateOnBlur={false}
      // validateOnChange={true}
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
              />
              <CustomInput
                label="Postal Code"
                name="postal"
                type="number"
                placeholder="Enter your postal code"
                large
              />
            </RowNewCardSection>
            <RowNewCardSection>
              <CustomInput
                label="City"
                name="city"
                type="text"
                placeholder="Enter your city"
                large
              />
              <CustomInput
                label="Phone Number"
                name="phone"
                type="number"
                placeholder="Enter your phone number"
                large
              />
            </RowNewCardSection>
            <CustomCheckbox
              label="I confirm the address details"
              type="checkbox"
              name="acceptAddress"
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
