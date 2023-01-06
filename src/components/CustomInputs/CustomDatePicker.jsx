import {
  Group,
  GroupDate,
  InputForm,
  InputDate,
  Error,
  InputDateTest,
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
        <InputDateTest
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
          type="date"
          popperPlacement="bottom"
          // selected={(field.value && new Date(field.value)) || null}
          // onChange={(val) => {
          //   setFieldValue(field.name, val);
          // }}
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
