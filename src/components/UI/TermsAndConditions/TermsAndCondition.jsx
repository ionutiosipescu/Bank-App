import React from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "../Input/Input.style";


function TermsAndCondition() {
  return (
    <Checkbox>
      <input type="checkbox" />
      <p>
        Yes, I agree with the <Link to="#">Terms and Services</Link>
      </p>
    </Checkbox>
  );
}

export default TermsAndCondition;
