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
import { useSelector } from "react-redux";
import { selectPlan } from "../../state-management/registerhelper/registerhelper.selector";
import Button from "../UI/NewButton/Button.component";
import PlanCardHeader from "../PlanCardRegister/PlanCardHeader";
import PlanCardBody from "../PlanCardRegister/PlanCardBody";
import PlanCardFooter from "../PlanCardRegister/PlanCardFooter";

const RadioButtonsPlan = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <RadioPlanContainer>
      <Field name={props.name}>
        {({ field }) => {
          return props.options.map((option) => {
            return (
              <label
                key={option.key}
                className={`radio-label ${option.key} ${
                  props.typeOfPlan === option.value ? "selected" : ""
                }`}
              >
                <InputRadio
                  {...field}
                  {...props}
                  onChange={(e) => {
                    field.onChange(e);
                    props.handleradio(e);
                  }}
                  id={option.value}
                  value={option.value || ""}
                  checked={props.typeOfPlan === option.value}
                  className={meta.touched && meta.error ? "input-error" : ""}
                />
                <PlanCardHeader option={option} />
                <PlanCardBody option={option} />
                <PlanCardFooter />
              </label>
            );
          });
        }}
      </Field>
    </RadioPlanContainer>
  );
};

export default RadioButtonsPlan;
