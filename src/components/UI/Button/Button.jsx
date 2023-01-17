import React from "react";
import { PropTypes } from "prop-types";
import { Btn } from "./Button.style";

function Button({ label, size, primary, handleClick, children }) {
  return (
    <Btn size={size} onClick={handleClick} primary={primary}>
      {label}
      {children}
    </Btn>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "100", "fit"]),
  primary: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
