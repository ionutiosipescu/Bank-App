import { useField } from "formik";
import { Group, InputForm, Error } from "../UI/Input/Input.style";
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
      <Group>
        <label className="checkbox-plan">{label}</label>
        <InputForm
          {...field}
          {...props}
          onChange={(e) => {
            field.onChange(e);
            props.handleBox(props.index, e);
            // props.setPlan(e);
          }}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};
export default CustomChecboxplan;
