import React from "react";
import { Btn } from "../Button/Button.style";
import { Link } from "react-router-dom";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import { Size } from "../Button/Button";

export type LinkButtonProps = {
  label?: string,
  to: string,
  size?: Size,
  primary?: string,
  handleClick?: () => void,
}& ButtonHTMLAttributes<HTMLButtonElement>

const LinkButton: FC<LinkButtonProps> = ({ label, to, size, primary, handleClick, children }) => {
  return (
    <Btn as={Link} to={to} size={size} onClick={handleClick} primary={primary}>
      {label}
      {children}
    </Btn>
  );
}

export default LinkButton;
