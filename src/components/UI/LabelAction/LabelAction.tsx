import React from "react";
import { LabelActionStyle } from "./LabelAction.style";

type LabelActionProps = {
  action: string,
  children: React.ReactNode,
}

function LabelAction({ action, children }: LabelActionProps) {
  return <LabelActionStyle action={action}>{children}</LabelActionStyle>;
}

export default LabelAction;
