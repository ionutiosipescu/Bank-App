import React from "react";
import "./Input.css";

function Input({ type, label, size, placeholder }) {
  return (
    <div className="input-wrapper">
      <label className="label">{label}</label>
      <input
        type={type}
        className={`input input-${size}`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
