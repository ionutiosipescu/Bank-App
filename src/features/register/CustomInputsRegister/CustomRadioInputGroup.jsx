import React from "react";
import { Field } from "formik";
import { useField } from "formik";
import {
  Group,
  InputRadio,
  Error,
} from "../../../components/UI/Input/Input.style";
import "../../../components/UI/Input/Input.css";

export const options = [
  { key: "Male", value: "male" },
  { key: "Female", value: "female" },
];

const RadioButtons = ({ label, ...props }) => {
  //   const { label, name, options, ...rest } = props;
  const [field, meta] = useField(props);
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
                      props.setData(e);
                    }}
                    id={option.value}
                    value={option.value}
                    checked={field.value === option.value}
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

export default RadioButtons;
