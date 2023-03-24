import "../Button/Button.css";
import React from "react";

const Button = ({ size, typeclass, type = "button", onClick, children }) => {
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
