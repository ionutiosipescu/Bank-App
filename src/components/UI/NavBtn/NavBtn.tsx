import React from "react";
import { Btn } from "../Button/Button.style";
import { Link } from "react-router-dom";
import { FC } from "react";
import { LinkButtonProps } from "../LinkButton/LinkButton";


const NavBtn: FC<LinkButtonProps> = ({ label, to, size, primary, handleClick, children }) => {
  return (
    <Btn as={Link} to={to} size={size} onClick={handleClick} primary={primary}>
      {label}
      {children}
    </Btn>
  );
}

export default NavBtn;
