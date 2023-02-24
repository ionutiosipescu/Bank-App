import { useField } from "formik";
import {
  Group,
  InputForm,
  Error,
  CheckboxPlan,
  InputCheckbox,
} from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import { useSelector } from "react-redux";
import { selectPlan } from "../../state-management/register/register.selector";
import { selectRegisterPlan } from "../../state-management/registerUser/registerUser.selector";
import { FieldHookConfig } from "formik";
import { Type } from "@sinclair/typebox";
import { FieldInputProps } from "formik";

const CustomChecboxplan = ({ label, ...props }) => {
  // fiedl , meta, helpers
  const [field, meta] = useField(props);
  return (
    <>
      {/* <Group> */}
      <label>
        <input
          {...field}
          {...props}
          onChange={(e) => {
            field.onChange(e);
            props.handleBox(props.index);
            // props.setPlan(e);
          }}
          className={`checkbox ${
            meta.touched && meta.error ? "input-error" : ""
          }`}
        />
        <span className="checkbox-custom">
          {label}
          <div className="info-plans">
            <div className="info">
              <h4>Standard</h4>
              <ul>
                <li>Less comision for transfers</li>
                <li>Easy to use</li>
                <li>Metal Card</li>
                <li>Smart Pay with App</li>
              </ul>
            </div>
            <div className="info">
              <h4>Premium</h4>
              <ul>
                <li>Less comision for transfers</li>
                <li>Easy to use</li>
                <li>Metal Card</li>
                <li>Smart Pay with App</li>
              </ul>
            </div>
            <div className="info">
              <h4>Vip</h4>
              <ul>
                <li>Less comision for transfers</li>
                <li>Easy to use</li>
                <li>Metal Card</li>
                <li>Smart Pay with App</li>
              </ul>
            </div>
          </div>
          <div className="info-message">
            <p>Chose your plan today !</p>
            <div class="arrow-down"></div>
          </div>
        </span>
      </label>
    </>
  );
};
export default CustomChecboxplan;
