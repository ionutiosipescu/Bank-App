import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setStep } from "../../state-management/registerhelper/registerhelper.actions";
import { selectStep } from "../../state-management/registerhelper/registerhelper.selector";
import "./StepButtons.css";
import Button from "../UI/NewButton/Button.component";

function PrevBtn() {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  return (
    <Button
      size="md"
      typeclass={`primary ${step === 0 ? "hideBtn" : ""}`}
      onClick={() => {
        dispatch(setStep(step - 1));
      }}
    >
      Back
    </Button>
  );
}

export default PrevBtn;
