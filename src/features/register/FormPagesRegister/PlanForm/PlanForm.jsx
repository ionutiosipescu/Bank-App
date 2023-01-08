import React from "react";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerSchemaPlan } from "../../ValidationSchema/ValidationSchema";
import { selectPlan } from "../../../../state-management/registerhelper/registerhelper.selector";
import { selectRegisterPlan } from "../../../../state-management/registerUser/registerUser.selector";
import CustomChecboxplan from "../../../../components/CustomInputs/CustomChecboxPlan";
import { updateRegisterPlanAsync } from "../../../../state-management/registerUser/registerUser.action";
import RadioButtonsPlan from "../../../../components/CustomInputs/CustomRadioInputGroupPlan";
import { updateRegisterPlanCheckboxAsync } from "../../../../state-management/registerUser/registerUser.action";
import FooterControl from "../../FooterControl/FooterControl";
import { selectStep } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setStep } from "../../../../state-management/registerhelper/registerhelper.actions";
import { ErrorMessage } from "formik";
import { setRegisterUserObject } from "../../../../state-management/registerUser/registerUser.action";
import { selectRegisterUser } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setRegisterObjectEsentials } from "../../../../state-management/registerUser/registerUser.action";
import "./PlanForm.css";
import { selectPlanObject } from "../../../../state-management/registerhelper/registerhelper.selector";

function PlanForm() {
  const step = useSelector(selectStep);
  const options = [
    { key: "standard", value: "standard", price: "0", planName: "STANDARD" },
    { key: "premium", value: "premium", price: "89", planName: "PREMIUM" },
    { key: "vip", value: "vip", price: "199", planName: "VIP" },
  ];
  const dispatch = useDispatch();
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
            dispatch(setRegisterObjectEsentials(registerHelper));
            dispatch(setRegisterUserObject(registerHelper));
            dispatch(setStep(step + 1));
          }
        }}
      >
        <Form className="plan-form">
          <div className="header-plan-form">
            <h1>Princing Page</h1>
            <p>
              To get started, you will need to choose a plan for your need. you
              can opt in for the monthly of annual options and go with one for
              the three listed below
            </p>
          </div>
          <RadioButtonsPlan
            type="radio"
            label="Type Of Plan"
            name={plan.namePlan}
            options={options}
            handleradio={handleradio}
            plan={plan}
            typeOfPlan={plan.typeOfPlan}
          />
          <ErrorMessage
            className="plan-error"
            component="div"
            name="userPlan"
          />
          <FooterControl />
        </Form>
      </Formik>
    </>
  );
}

export default PlanForm;
