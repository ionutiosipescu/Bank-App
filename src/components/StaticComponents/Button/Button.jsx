import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
import { PropTypes } from "prop-types";

function Button({ label, to, size, isPrimary, handleClick }) {
  const primary = isPrimary ? "primary" : "secondary";

  return (
    <Link
      to={to}
      className={`btn btn-${size} btn-${primary}`}
      onClick={handleClick}
    >
      {label}
    </Link>
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
