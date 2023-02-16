import { useField } from "formik";
import { Group, InputForm, Error } from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import { settingsSchema } from "../../features/settings/ValidationSchema/ValidationSchema";
import { useFormikContext } from "formik";
import { useEffect } from "react";

const CustomInputSettings = ({ label, ...props }) => {
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
          maxLength="35"
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </Group>
    </>
  );
};
export default CustomInputSettings;
