import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import RadioButtonsPlan from "../../../../components/CustomInputs/CustomRadioInputGroupPlan";
import FooterControl from "../../FooterControl/FooterControl";
import "./PlanForm.css";
import { options } from "../../../../utils/data/plancardregisterData";
import HeaderPlan from "./HeaderPlan/HeaderPlan";
import { ErrorMsg } from "../../../../components/Errors/Auth/ErrorMsg.style";
import { selectPlan } from "../../../../state-management/Auth/register/register.selector";
import { selectStep } from "../../../../state-management/Auth/register/register.selector";
import { selectPlanObject } from "../../../../state-management/Auth/register/register.selector";
import { selectRegisterUser } from "../../../../state-management/Auth/register/register.selector";
import { setStep } from "../../../../state-management/Auth/register/register.actions";
import { selectRegisterPlan } from "../../../../state-management/Auth/register/register.selector";
import { updateRegisterPlanAsync } from "../../../../state-management/Auth/register/register.actions";
import { setRegisterUserObject } from "../../../../state-management/Auth/register/register.actions";
import { setRegisterObjectAditionals } from "../../../../state-management/Auth/register/register.actions";
import e from "cors";

function PlanForm() {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  const planData = useSelector(selectPlan);
  const plan = useSelector(selectPlanObject);
  const userPlan = useSelector(selectRegisterPlan);
  const register = useSelector(selectRegisterUser);
  const index = 0;

  const handleradio = (e) => {
    dispatch(updateRegisterPlanAsync(userPlan, planData, index, e));
    console.log(userPlan, planData, index, e);
  };

  return (
    <>
      <Formik
        initialValues={{ userPlan }}
        validateOnBlur={false}
        validateOnChange={true}
        onSubmit={(values, actions) => {
          console.log(values);
          if (userPlan.length === 0) {
            actions.setFieldError("userPlan", "At least one item is required");
          } else {
            dispatch(setRegisterObjectAditionals(register));
            dispatch(setRegisterUserObject(register));
            dispatch(setStep(step + 1));
          }
        }}
      >
        <Form className="plan-form">
          <HeaderPlan />
          <RadioButtonsPlan
            type="radio"
            label="Type Of Plan"
            name={plan.namePlan}
            options={options}
            handleradio={handleradio}
            plan={plan}
            typeOfPlan={plan.typeOfPlan}
          />
          <ErrorMsg component="div" name="userPlan" />
          <FooterControl />
        </Form>
      </Formik>
    </>
  );
}

export default PlanForm;
