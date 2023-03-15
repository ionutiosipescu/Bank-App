import React from "react";
import { LabelListStyle } from "./LabelList.style";

type LabelListProps = {
  status: string,
  children:React.ReactNode,
}

function LabelList({ status, children }: LabelListProps) {
  return <LabelListStyle status={status}>{children}</LabelListStyle>;
}

export default LabelList;
