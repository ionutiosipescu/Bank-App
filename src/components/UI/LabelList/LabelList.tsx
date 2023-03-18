import React from "react";
import { LabelListStyle } from "./LabelList.style";
import { FC } from "react";
import { ButtonHTMLAttributes } from "react";
import { StatusActionsProps } from "./LabelList.style";

export type LabelListProps = {
  status?: StatusActionsProps,
}& ButtonHTMLAttributes<HTMLButtonElement>

const LabelList: FC<LabelListProps> = ({ status, children }) => {
  return <LabelListStyle status={status}>{children}</LabelListStyle>;
}

export default LabelList;
