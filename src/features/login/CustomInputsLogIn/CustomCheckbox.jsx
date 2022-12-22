import { useField } from "formik";
import {
  InputForm,
  Error,
  Checkbox,
} from "../../../components/UI/Input/Input.style";
import "../../../components/UI/Input/Input.css";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Checkbox>
        <InputForm
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>I accept the terms of service</span>
      </Checkbox>

      {meta.touched && meta.error && <Error>{meta.error}</Error>}
    </>
  );
};
export default CustomCheckbox;
