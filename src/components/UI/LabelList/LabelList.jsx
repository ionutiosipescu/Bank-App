import React from "react";
import { LabelListStyle } from "./LabelList.style";

function LabelList({ status, children }) {
  return <LabelListStyle status={status}>{children}</LabelListStyle>;
}

export default LabelList;
