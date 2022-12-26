import {
  Group,
  GroupDate,
  InputForm,
  InputDate,
  Error,
} from "../../../components/UI/Input/Input.style";
import "../../../components/UI/Input/Input.css";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const DatePickerField = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <>
      <Group>
        <label>{label}</label>
        <InputDate
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
          selected={(field.value && new Date(field.value)) || null}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
          popperPlacement="bottom"
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};

export default DatePickerField;
