import React from "react";
import { Btn } from "./../Button/Button.style";
import { Link } from "react-router-dom";

type LinkButtonProps = {
  label?: string,
  to: string,
  size: string,
  primary?: string,
  handleClick?: () => void,
  children:React.ReactNode,
}

function LinkButton({ label, to, size, primary, handleClick, children }: LinkButtonProps) {
  return (
    <Btn as={Link} to={to} size={size} onClick={handleClick} primary={primary}>
      {label}
      {children}
    </Btn>
  );
}

export default LinkButton;
