import React from "react";
import { Field } from "formik";
import { useField } from "formik";
import {
  Group,
  InputRadio,
  Error,
  RadioPlanContainer,
} from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import PlanCardHeader from "../PlanCardRegister/PlanCardHeader";
import PlanCardBody from "../PlanCardRegister/PlanCardBody";
import PlanCardFooter from "../PlanCardRegister/PlanCardFooter";
import { BtnBoxExchange } from "../../features/deposits/DepositsControlerCard/DepositControlerCard.style";

const RadioButtonsExchange = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <RadioPlanContainer>
      <Field name={props.name}>
        {({ field }) => {
          return props.options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <label>
                  <InputRadio
                    {...field}
                    {...props}
                    onChange={(e) => {
                      field.onChange(e);
                      props.setDataRadio(e);
                    }}
                    id={option.value}
                    value={option.value || ""}
                    name={option.value}
                    checked={props.depositAction === option.value}
                    className={meta.touched && meta.error ? "input-error" : ""}
                  />
                  <div
                    className={`box-exchange ${
                      props.depositAction === option.value ? "selected" : ""
                    }`}
                  >
                    {option.value}
                  </div>
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </RadioPlanContainer>
  );
};

export default RadioButtonsExchange;
