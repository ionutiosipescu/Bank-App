import React, { useEffect, useState } from "react";
import { RegisterFormPart } from "../../FormRegister/FormRegister.style";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { registerSchemaPlan } from "../../ValidationSchema/ValidationSchema";
import CustomInput from "../../../../components/CustomInputs/CustomInput";
import { selectPlan } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setObjectPlan } from "../../../../state-management/registerhelper/registerhelper.actions";
import { selectRegisterPlan } from "../../../../state-management/registerUser/registerUser.selector";
import { setRegisterPlanAdd } from "../../../../state-management/registerUser/registerUser.action";
import { selectCheckedRon } from "../../../../state-management/registerhelper/registerhelper.selector";
import { setToggleRon } from "../../../../state-management/registerhelper/registerhelper.actions";
import CustomChecboxplan from "../../../../components/CustomInputs/CustomChecboxPlan";
import { setRegisterPlanRemove } from "../../../../state-management/registerUser/registerUser.action";
import { updateRegisterPlanAsync } from "../../../../state-management/registerUser/registerUser.action";
import { currencyData } from "../../../../utils/data/currencyData";
import { initArrPlans } from "../../../../state-management/registerhelper/registerhelper.actions";
import { setShowPlans } from "../../../../state-management/registerhelper/registerhelper.actions";
import RadioButtonsPlan from "../../../../components/CustomInputs/CustomRadioInputGroupPlan";
import { setTypeOfPlan } from "../../../../state-management/registerhelper/registerhelper.actions";
import { updateRegisterPlanCheckboxAsync } from "../../../../state-management/registerUser/registerUser.action";
import { selectRegisterHelperObject } from "../../../../state-management/registerhelper/registerhelper.selector";

function PlanForm() {
  const options = [
    { key: "Standard", value: "standard" },
    { key: "Premium", value: "premium" },
    { key: "Vip", value: "vip" },
  ];
  const dispatch = useDispatch();
  const planData = useSelector(selectPlan);
  const userDataArrPlan = useSelector(selectRegisterPlan);
  const RegisterHelperObject = useSelector(selectRegisterHelperObject);

  const handleSubmit = () => {
    // console.log("sami bag pl");
  };

  const handleBox = (index) => {
    dispatch(updateRegisterPlanCheckboxAsync(userDataArrPlan, planData, index));
  };

  const handleRadio = (index, e) => {
    dispatch(updateRegisterPlanAsync(userDataArrPlan, planData, index, e));
  };

  return (
    <>
      <Formik
        validationSchema={registerSchemaPlan}
        initialValues={{
          planData: [
            {
              typeOfPlan: "",
              currency: "ron",
              namePlan: "Ron",
              currentBallance: "",
              showPlans: false,
            },
            {
              typeOfPlan: "",
              currency: "euro",
              namePlan: "Euro",
              currentBallance: "",
              showPlans: false,
            },
          ],
        }}
        onSubmit={handleSubmit}
      >
        <Form className="personal-form">
          {planData.map((plan, index) => {
            return (
              <div key={index}>
                <CustomChecboxplan
                  key={plan.currency}
                  name="showPlans"
                  value={plan.showPlans}
                  label={plan.namePlan}
                  checked={plan.showPlans}
                  plan={plan}
                  small
                  type="checkbox"
                  handleBox={handleBox}
                  index={index}
                />
                {plan.showPlans && (
                  <div>
                    <RadioButtonsPlan
                      type="radio"
                      label="Type Of Plan"
                      name="type"
                      options={options}
                      handleRadio={handleRadio}
                      index={index}
                      plan={plan}
                      typeOfPlan={plan.typeOfPlan}
                    />
                  </div>
                )}
              </div>
            );
          })}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default PlanForm;
