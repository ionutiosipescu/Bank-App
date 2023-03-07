import React from "react";
import { PropTypes } from "prop-types";
import { Btn } from "./Button.style";

function Button({ label, size, primary, handleClick, children, ...props }) {
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

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "round", "fullWidth"]),
  primary: PropTypes.oneOf(["primary", "secondary"]),
  handleClick: PropTypes.func,
};

export default Button;
