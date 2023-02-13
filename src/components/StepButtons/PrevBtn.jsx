import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setStep } from "../../state-management/Auth/registerhelper/registerhelper.actions";
import { selectStep } from "../../state-management/Auth/registerhelper/registerhelper.selector";
import Button from "../UI/NewButton/Button.component";

function PrevBtn() {
  const dispatch = useDispatch();
  const step = useSelector(selectStep);
  return (
    <Button
      size="lg"
      typeclass="primary"
      onClick={() => {
        dispatch(setStep(step - 1));
      }}
    >
      Back
    </Button>
  );
}

export default PrevBtn;
