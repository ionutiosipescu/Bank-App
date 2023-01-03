import { useField } from "formik";
import { InputForm, Error, Checkbox } from "../UI/Input/Input.style";
import "../UI/Input/Input.css";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <Checkbox>
        <InputForm
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of service</span>
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Checkbox>
    </>
  );
};
export default CustomCheckbox;
