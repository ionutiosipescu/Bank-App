import "../Button/Button.css";
import React from "react";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";

type NewButtonProps = {
  size: string;
  typeclass: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}& ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<NewButtonProps> = ({size, typeclass, type = "button", onClick, children}) => {


  return (
    <button
      className={`btn btn-${size} btn-${typeclass} ${typeclass}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

