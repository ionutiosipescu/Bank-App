import { useField } from "formik";
import {
  Group,
  InputSelect,
  Error,
} from "../../../components/UI/Input/Input.style";
import "../../../components/UI/Input/Input.css";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Group>
        <label>{label}</label>
        <InputSelect
          {...field}
          {...props}
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
export default CustomSelect;
