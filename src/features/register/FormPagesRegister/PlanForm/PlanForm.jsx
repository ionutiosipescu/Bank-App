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

function PlanForm() {
  const step = useSelector(selectStep);
  const options = [
    { key: "Standard", value: "standard" },
    { key: "Premium", value: "premium" },
    { key: "Vip", value: "vip" },
  ];
  const dispatch = useDispatch();
  const planData = useSelector(selectPlan);
  const userPlan = useSelector(selectRegisterPlan);

  const handleBox = (index) => {
    dispatch(updateRegisterPlanCheckboxAsync(userPlan, planData, index));
  };

  const handleRadio = (index, e) => {
    dispatch(updateRegisterPlanAsync(userPlan, planData, index, e));
  };

  return (
    <>
      <Formik
        validationSchema={registerSchemaPlan}
        initialValues={{ userPlan }}
        validateOnBlur={false}
        validateOnChange={true}
        onSubmit={(values, actions) => {
          if (userPlan.length === 0) {
            actions.setFieldError("userPlan", "At least one item is required");
          } else {
            dispatch(setStep(step + 1));
          }
        }}
      >
        <Form className="personal-form">
          {planData.map((plan, index) => {
            return (
              <div key={index}>
                <CustomChecboxplan
                  key={plan.currency}
                  name="userPlan"
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
                      name="userPlan"
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
          <ErrorMessage name="userPlan" />
          <FooterControl />
        </Form>
      </Formik>
    </>
  );
}

export default PlanForm;
