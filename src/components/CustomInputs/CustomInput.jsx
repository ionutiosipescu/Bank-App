import { useField } from "formik";
import { Group, InputForm, Error } from "../UI/Input/Input.style";
import "../UI/Input/Input.css";

const CustomInput = ({ label, ...props }) => {
  // fiedl , meta, helpers
  const [field, meta] = useField(props);
  return (
    <>
      <Group>
        <label>{label}</label>
        <InputForm
          {...field}
          {...props}
          onChange={(e) => {
            field.onChange(e);
            props.setData(e);
          }}
          className={meta.touched && meta.error ? "input-error" : ""}
          maxLength="25"
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};
export default CustomInput;
