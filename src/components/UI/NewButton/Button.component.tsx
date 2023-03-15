import "../Button/Button.css";
import React from "react";

type NewButtonProps = {
  size: string;
  typeclass: string;
  type?: "button" | "submit" | "reset"; // add a type for the `type` prop
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = ({size, typeclass, type = "button", onClick, children}: NewButtonProps) => {


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

