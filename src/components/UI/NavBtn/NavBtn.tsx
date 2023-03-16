import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import { Label, NavBtnContainer } from "./NavBtn.style";
import LinkButton from "./../LinkButton/LinkButton";

type NavBtnProps = {
  to: string,
  children: React.ReactNode,
  label: string,
  active: string,
  selected: boolean,
  onClick: () => void,
  size: string,
}

function NavBtn({ to, children, label, active, selected, onClick, size }: NavBtnProps) {
  return (
    <NavBtnContainer selected={selected} onClick={onClick}>
      <LinkButton to={to} size={size}>
        {children}
      </LinkButton>
      <Label as={Link} to={to} active={active}>
        {label}
      </Label>
    </NavBtnContainer>
  );
}


export default NavBtn;
