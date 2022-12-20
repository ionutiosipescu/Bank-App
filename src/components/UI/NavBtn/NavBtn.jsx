import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import { Label, NavBtnContainer } from "./NavBtn.style";
import { PropTypes } from "prop-types";

function NavBtn({ to, children, label }) {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState(!btnState);
  };

  return (
    <NavBtnContainer active={btnState} onClick={handleClick}>
      <Button to={to}>{children}</Button>
      <Label as={Link} to={to}>
        {label}
      </Label>
    </NavBtnContainer>
  );
}

NavBtn.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.element,
};

export default NavBtn;
