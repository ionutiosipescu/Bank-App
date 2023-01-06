import React from "react";
import { Field } from "formik";
import { useField } from "formik";
import { Group, InputRadio, Error } from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import { useSelector } from "react-redux";
import { selectPlan } from "../../state-management/registerhelper/registerhelper.selector";

const RadioButtonsPlan = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Group>
      {/* <label>{label}</label> */}
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
                      props.handleradio(props.index, e);
                    }}
                    id={option.value}
                    value={option.value || ""}
                    checked={props.typeOfPlan === option.value}
                    className={meta.touched && meta.error ? "input-error" : ""}
                  />
                  <div className="plancard-header">
                    {/* <h2>My Balance</h2> */}
                    <h1>{option.value}</h1>
                  </div>
                  <div className="plancard-body">
                    <h4>xxxxxxxx</h4>
                  </div>
                  <div className="plancard-footer">
                    <div className="holder">
                      <h6>Card Holder</h6>
                      <h5>Iosipescu Ionut</h5>
                    </div>
                    <div className="valid">
                      <h6>Valid Until</h6>
                      <h5>01/10/2026</h5>
                    </div>
                  </div>
                  <div className="circle circle-one"></div>
                  <div className="circle circle-two"></div>
                  <div className="pill pill-one"></div>
                  <div className="pill pill-two"></div>
                  {/* <div className="icon" />
                  <div className="info" />
                  <div className="title">{option.value}</div> */}
                  {/* <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div> */}
                  {/* <div className="price">$9.99/month</div> */}

                  {/* <label htmlFor={option.value}>{option.key}</label> */}
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
