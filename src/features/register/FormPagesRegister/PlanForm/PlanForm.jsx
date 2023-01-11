import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectPlan } from "../../../../state-management/registerhelper/registerhelper.selector";
import { selectRegisterPlan } from "../../../../state-management/registerUser/registerUser.selector";
import { updateRegisterPlanAsync } from "../../../../state-management/registerUser/registerUser.action";
import RadioButtonsPlan from "../../../../components/CustomInputs/CustomRadioInputGroupPlan";
import FooterControl from "../../FooterControl/FooterControl";
import { selectStep } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setStep } from "../../../../state-management/registerhelper/registerhelper.actions";
import { setRegisterUserObject } from "../../../../state-management/registerUser/registerUser.action";
import { selectRegisterUser } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setRegisterObjectAditionals } from "../../../../state-management/registerUser/registerUser.action";
import "./PlanForm.css";
import { selectPlanObject } from "../../../../state-management/registerhelper/registerhelper.selector";
import { options } from "../../../../utils/data/plancardregisterData";
import HeaderPlan from "./HeaderPlan/HeaderPlan";
import { ErrorMsg } from "../../../../components/Errors/Auth/ErrorMsg.style";

function PlanForm() {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  const planData = useSelector(selectPlan);
  const plan = useSelector(selectPlanObject);
  const userPlan = useSelector(selectRegisterPlan);
  const registerHelper = useSelector(selectRegisterUser);
  const index = 0;

  const handleradio = (e) => {
    dispatch(updateRegisterPlanAsync(userPlan, planData, index, e));
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
            dispatch(setRegisterObjectAditionals(registerHelper));
            dispatch(setRegisterUserObject(registerHelper));
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
