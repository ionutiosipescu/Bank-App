import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import { Label, NavBtnContainer } from "./NavBtn.style";
import { PropTypes } from "prop-types";

function NavBtn({ to, children, label, active, selected, onClick }) {
  return (
    <NavBtnContainer selected={selected} onClick={onClick}>
      <Button to={to}>{children}</Button>
      <Label as={Link} to={to} active={active}>
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
