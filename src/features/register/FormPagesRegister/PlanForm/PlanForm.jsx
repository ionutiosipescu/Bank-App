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

function PlanForm() {
  const step = useSelector(selectStep);
  const options = [
    { key: "standard", value: "standard" },
    { key: "premium", value: "premium" },
    { key: "vip", value: "vip" },
  ];
  const dispatch = useDispatch();
  const planData = useSelector(selectPlan);
  const userPlan = useSelector(selectRegisterPlan);
  const registerHelper = useSelector(selectRegisterUser);

  const handleBox = (index) => {
    dispatch(updateRegisterPlanCheckboxAsync(userPlan, planData, index));
  };

  const handleradio = (index, e) => {
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
          {planData.map((plan, index) => {
            return (
              <div key={index}>
                <CustomChecboxplan
                  key={plan.currency}
                  name={plan.namePlan}
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
                      name={plan.namePlan}
                      options={options}
                      handleradio={handleradio}
                      index={index}
                      plan={plan}
                      typeOfPlan={plan.typeOfPlan}
                    />
                  </div>
                )}
              </div>
            );
          })}
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
