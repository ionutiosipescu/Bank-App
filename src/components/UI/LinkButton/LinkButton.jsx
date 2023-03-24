import React from "react";
import { Btn } from "../Button/Button.style";
import { Link } from "react-router-dom";

function LinkButton({ label, to, size, primary, handleClick, children }) {
  return (
    <Btn as={Link} to={to} size={size} onClick={handleClick} primary={primary}>
      {label}
      {children}
    </Btn>
  );
}

export default LinkButton;
