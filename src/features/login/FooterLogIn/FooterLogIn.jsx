import React from "react";
import { Link } from "react-router-dom";

function FooterLogIn() {
  return (
    <div className="footer">
      <div className="register">
        <h5>Don't have an account?</h5>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
}

export default FooterLogIn;
