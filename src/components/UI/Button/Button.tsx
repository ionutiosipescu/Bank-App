import React from "react";
import { Btn } from "./Button.style";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";

export type Size = "sm" | "md" | "fit"

export type ButtonProps = {
  label?: string,
  size?: Size,
  primary?: string,
  handleClick?: () => void,
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ label, size, primary, handleClick, children, ...props }) => {
  return (
    <Btn
      size={size}
      onClick={handleClick}
      primary={primary}
      id="button-global"
      {...props}
    >
      {label}
      {children}
    </Btn>
  );
}

export default Button;
