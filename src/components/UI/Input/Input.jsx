import React from "react";
import { InputForm, Group } from "./Input.style";

function Input({ label, ...otherProps }) {
  return (
    <Group>
      <label>{label}</label>
      <InputForm {...otherProps} />
    </Group>
  );
}

export default Input;
