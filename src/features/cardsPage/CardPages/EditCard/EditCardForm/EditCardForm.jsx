import React from "react";
import { CardPlansContainer } from "../../NewCard/NewCardPlans/NewCardPlans.style";
import RadioButtonsPlan from "../../../../../components/CustomInputs/CustomRadioInputGroupPlan";
import { Formik, Form } from "formik";
import { useSelector } from "react-redux";
import { selectPlanObject } from "../../../../../state-management/Auth/registerhelper/registerhelper.selector";
import { options } from "../../../../../utils/data/plancardregisterData";

function EditCardForm() {
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
        </Form>
      </Formik>
    </CardPlansContainer>
  );
}

export default EditCardForm;
