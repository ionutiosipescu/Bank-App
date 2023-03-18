import React from "react";
import { LabelActionStyle } from "./LabelAction.style";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";

export type LabelActionProps = {
action?: string,
}& ButtonHTMLAttributes<HTMLButtonElement>

const LabelAction: FC<LabelActionProps> = ({ action, children }) => {
  return <LabelActionStyle action={action}>{children}</LabelActionStyle>;
}

export default LabelAction;
