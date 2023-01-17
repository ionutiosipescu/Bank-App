import React from "react";
import { useField } from "formik";
import {
  Group,
  ReCaptchaGroup,
  InputForm,
  Error,
  StyledReCAPTCHA,
} from "../UI/Input/Input.style";
import "../UI/Input/Input.css";
import ReCAPTCHA from "react-google-recaptcha";

function CustomreCaptcha({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  console.log(field, meta);
  return (
    <>
      <ReCaptchaGroup>
        <label>{label}</label>
        <StyledReCAPTCHA
          {...field}
          {...props}
          onChange={(token) => {
            helpers.setValue(token);
          }}
          className={
            meta.touched && meta.error
              ? "input-error g-recaptcha"
              : "g-recaptcha"
          }
        />
        {meta.touched && meta.error && <Error>{meta.error}</Error>}
      </ReCaptchaGroup>
    </>
  );
}

export default CustomreCaptcha;
