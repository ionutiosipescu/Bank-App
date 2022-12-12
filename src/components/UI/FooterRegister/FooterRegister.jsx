import React from "react";
import { Link } from "react-router-dom";

function FooterRegister() {
  return (
    <div className="footer">
      <div className="register">
        <h5>Already have an account?</h5>
        <Link to="/login">Go back to Log In</Link>
      </div>
    </div>
  );
}

export default FooterRegister;
