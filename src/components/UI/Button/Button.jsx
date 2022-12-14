import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Btn } from "./Button.style";

function Button({ label, to, size, isPrimary, handleClick }) {
  const primary = isPrimary ? "primary" : "secondary";

  return (
    <Btn
      as={Link}
      to={to}
      className={`btn btn-${size} btn-${primary}`}
      onClick={handleClick}
    >
      {label}
    </Btn>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "100", "fit"]),
  isPrimary: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
