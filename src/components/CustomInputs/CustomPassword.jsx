import { useField } from "formik";
import { Group, InputForm, Error } from "../UI/Input/Input.style";
import "../UI/Input/Input.css";

const CustomPassword = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Group>
        <label>{label}</label>
        <InputForm
          {...field}
          {...props}
          meta={meta}
          onChange={(e) => {
            field.onChange(e);
            props.setData(e);
          }}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};
export default CustomPassword;
