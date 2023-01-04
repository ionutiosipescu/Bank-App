import React from "react";
import { useSelector } from "react-redux";
import { selectStep } from "../../state-management/registerhelper/registerhelper.selector";

const NextBtn = () => {
  const step = useSelector(selectStep);
  return (
    <button type="submit">{step === 3 ? "Create Account" : "Next"}</button>
  );
};

export default NextBtn;
