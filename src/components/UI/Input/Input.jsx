import React from "react";
import { InputForm, Group } from "./Input.style";

function Input({ label, min, max, ...otherProps }) {
  return (
    <Group {...otherProps}>
      <label>{label}</label>
      <InputForm {...otherProps} min={min} max={max} />
    </Group>
  );
}
export default Input;
