import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setStep } from "../../state-management/registerhelper/registerhelper.actions";
import { selectStep } from "../../state-management/registerhelper/registerhelper.selector";

function PrevBtn() {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  return (
    <button
      onClick={() => {
        dispatch(setStep(step - 1));
      }}
    >
      Back
    </button>
  );
}

export default PrevBtn;
