import { useField } from "formik";
import { Group, InputForm, Error } from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import { useSelector } from "react-redux";
import { selectPlan } from "../../state-management/registerhelper/registerhelper.selector";
import { selectRegisterPlan } from "../../state-management/registerUser/registerUser.selector";

const CustomChecboxplan = ({ label, ...props }) => {
  const plan = useSelector(selectRegisterPlan);
  // fiedl , meta, helpers
  const [field, meta, helpers] = useField(props);
  console.log(meta);
  return (
    <>
      <Group>
        <label className="checkbox-plan">{label}</label>
        <InputForm
          {...field}
          {...props}
          onChange={(e) => {
            field.onChange(e);
            props.setPlan(e);
          }}
          checked={plan.some((el) => el.currency === field.value)}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};
export default CustomChecboxplan;
