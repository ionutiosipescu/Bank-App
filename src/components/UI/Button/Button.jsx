import React from "react";
import { PropTypes } from "prop-types";
import { Btn } from "./Button.style";

function Button({ label, size, primary, handleClick, children, ...props }) {
  return (
    <Btn size={size} onClick={handleClick} primary={primary} {...props}>
      {label}
      {children}
    </Btn>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "round", "fullWidth"]),
  primary: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
