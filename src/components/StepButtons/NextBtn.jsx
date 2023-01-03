import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setStep } from "../../state-management/registerhelper/registerhelper.actions";
import { selectStep } from "../../state-management/registerhelper/registerhelper.selector";

const NextBtn = () => {
  return <button type="submit">Next</button>;
};

export default NextBtn;
