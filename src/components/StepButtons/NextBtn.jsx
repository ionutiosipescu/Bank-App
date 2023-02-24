import React from "react";
import { useSelector } from "react-redux";
import { selectStep } from "../../state-management/Auth/register/register.selector";
import Button from "../UI/NewButton/Button.component";

const NextBtn = () => {
  const step = useSelector(selectStep);
  return (
    <Button size="lg" type="submit" typeclass="primary">
      {step === 3 ? "Create Account" : "Next"}
    </Button>
  );
};

export default NextBtn;
