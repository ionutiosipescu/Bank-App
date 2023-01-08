import React from "react";
import { Field } from "formik";
import { useField } from "formik";
import { Group, InputRadio, Error } from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import { useSelector } from "react-redux";
import { selectPlan } from "../../state-management/registerhelper/registerhelper.selector";
import Button from "../UI/NewButton/Button.component";

const RadioButtonsPlan = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Group>
      <div className="radio-container">
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
                  <div className="plancard-header">
                    <h4>{option.planName}</h4>
                    <div className="plancard-price">
                      <div className="price-tag">ron</div>
                      <h1>{option.price}</h1>
                    </div>
                  </div>
                  <div className="plancard-body">
                    <ul>
                      <li>
                        <span>1</span> Project
                      </li>
                      <li>
                        <span>5</span> Team Members
                      </li>
                      <li>
                        <span>55</span> Personal COntacts
                      </li>
                      <li>
                        <span>5.000</span> Messages
                      </li>
                    </ul>
                  </div>
                  <div className="plancard-footer">GET STARTED</div>
                </label>
              );
            });
          }}
        </Field>
      </div>
      {/* {meta.touched && meta.error && <Error>{meta.error}</Error>} */}
    </Group>
  );
};

export default RadioButtonsPlan;
