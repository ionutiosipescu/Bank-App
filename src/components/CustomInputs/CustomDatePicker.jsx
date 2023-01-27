import {
  Group,
  GroupDate,
  InputDate,
  Error,
  InputForm,
} from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Field } from "formik";

const DatePickerField = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  return (
    <>
      <Group>
        <label>{label}</label>
        <InputForm
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
          type="date"
          popperPlacement="bottom"
          onChange={(e) => {
            field.onChange(e);
            props.setData(e);
          }}
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};

export default DatePickerField;
