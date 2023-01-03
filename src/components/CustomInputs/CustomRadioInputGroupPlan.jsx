import React from "react";
import { Field } from "formik";
import { useField } from "formik";
import { Group, InputRadio, Error } from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import { useSelector } from "react-redux";
import { selectPlan } from "../../state-management/registerhelper/registerhelper.selector";

const RadioButtonsPlan = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props.plan);
  return (
    <Group>
      <label>{label}</label>
      <div className="radio-container">
        <Field name={props.name}>
          {({ field }) => {
            return props.options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <InputRadio
                    {...field}
                    {...props}
                    onChange={(e) => {
                      field.onChange(e);
                      props.handleRadio(props.index, e);
                    }}
                    id={option.value}
                    value={option.value || ""}
                    checked={props.typeOfPlan === option.value}
                    className={meta.touched && meta.error ? "input-error" : ""}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              );
            });
          }}
        </Field>
      </div>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </Group>
  );
};

export default RadioButtonsPlan;
