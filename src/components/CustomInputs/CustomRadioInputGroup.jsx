import React from "react";
import { Field } from "formik";
import { useField } from "formik";
import {
  Group,
  InputRadio,
  Error,
  GroupRadio,
  RadioLabel,
  GroupRadioOption,
  GroupRadioRegister,
} from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import { useSelector } from "react-redux";
import { selectRegisterUser } from "../../state-management/Auth/register/register.selector";

const RadioButtons = ({ label, ...props }) => {
  const registerData = useSelector(selectRegisterUser);
  const { gender } = registerData;
  const [field, meta] = useField(props);
  return (
    <GroupRadioRegister radio>
      <RadioLabel>{label}</RadioLabel>
      <GroupRadioOption>
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
                    value={option.value || ""}
                    checked={gender === option.value}
                    className={meta.touched && meta.error ? "input-error " : ""}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              );
            });
          }}
        </Field>
      </GroupRadioOption>
      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </GroupRadioRegister>
  );
};

export default RadioButtons;
