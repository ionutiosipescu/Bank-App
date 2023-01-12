import React from "react";
import { useSelector } from "react-redux";
import { selectStep } from "../../state-management/Auth/registerhelper/registerhelper.selector";
import Button from "../UI/NewButton/Button.component";

const NextBtn = () => {
  const step = useSelector(selectStep);
  return (
    <Button size="md" type="submit" typeclass="primary">
      {step === 3 ? "Create Account" : "Next"}
    </Button>
  );
};

export default NextBtn;
