import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ label, link, size, fill }) {
  return (
    <Link to={link} className={`btn btn-${size} btn-${fill}`}>
      {label}
    </Link>
  );
}

export default Button;
