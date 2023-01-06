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
import { selectPlan } from "../../state-management/registerhelper/registerhelper.selector";
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
        <span className="checkbox-custom">{label}</span>
      </label>
      {/* {meta.touched && meta.error && <Error>{meta.error}</Error>} */}
      {/* </Group> */}
    </>
  );
};
export default CustomChecboxplan;
