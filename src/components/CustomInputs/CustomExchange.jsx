import { useField } from "formik";
import { Group, InputForm, Error } from "../UI/Input/Input.style";
import "../UI/Input/Input.css";

const CustomExchange = ({ label, ...props }) => {
  // fiedl , meta, helpers
  const [field, meta] = useField(props);
  return (
    <>
      <Group className="group">
        <label>{label}</label>
        <InputForm
          {...field}
          {...props}
          onChange={(e) => {
            field.onChange(e);
            props.onAmountChange(e.target.value);
          }}
          value={props.amount}
          className={meta.touched && meta.error ? "input-error" : ""}
          maxLength="25"
        />
        <select
          value={props.currency}
          onChange={(ev) => props.onCurrencyChange(ev.target.value)}
        >
          {props.currencies.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};
export default CustomExchange;
