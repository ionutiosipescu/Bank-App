import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Btn } from "./Button.style";

function Button({ label, to, size, primary, handleClick, children }) {
  return (
    <Btn as={Link} to={to} size={size} onClick={handleClick} primary={primary}>
      {label}
      {children}
    </Btn>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "100", "fit"]),
  primary: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
