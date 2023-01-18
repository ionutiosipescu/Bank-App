import React from "react";
import { LabelActionStyle } from "./LabelAction.style";

function LabelAction({ action, children }) {
  return <LabelActionStyle action={action}>{children}</LabelActionStyle>;
}

export default LabelAction;
