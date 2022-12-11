import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ label, to, size, fill, color }) {
  return (
    <Link to={to} className={`btn btn-${size} btn-${fill} btn-${color}`}>
      {label}
    </Link>
  );
}

export default Button;
