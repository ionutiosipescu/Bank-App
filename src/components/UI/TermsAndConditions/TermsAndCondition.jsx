import React from "react";
import { Link } from "react-router-dom";

function TermsAndCondition() {
  return (
    <div className="checkbox">
      <input type="checkbox" />
      <p>
        Yes, I agree with the <Link>Terms and Services</Link>
      </p>
    </div>
  );
}

export default TermsAndCondition;
