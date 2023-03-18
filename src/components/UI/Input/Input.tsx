import React from "react";
import { InputForm, Group } from "./Input.style";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";

export type InputProps = {
  label: string,
  min: string,
  max: string,
} & ButtonHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = ({ label, min, max, ...otherProps }) => {
  return (
    <Group {...otherProps}>
      <label>{label}</label>
      <InputForm {...otherProps} min={min} max={max} />
    </Group>
  );
}
export default Input;
