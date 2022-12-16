import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import { NavBtnContainer } from "./NavBtn.style";
import { PropTypes } from "prop-types";

function NavBtn({ to, children, label, isPrimary }) {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState(!btnState);
  };

  console.log(btnState);

  return (
    <NavBtnContainer as={Link} to={to} active={btnState} onClick={handleClick}>
      <Button to={to} size="circle" isPrimary={isPrimary}>
        {children}
      </Button>
      <h2>{label}</h2>
    </NavBtnContainer>
  );
}

NavBtn.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.element,
};

export default NavBtn;
