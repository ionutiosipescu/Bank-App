import React from "react";
import "./Register.css";
import MainRegister from "../../features/register/MainRegister/MainRegister";
import { RegisterContainer, RegisterContainerPlan } from "./Register.style";
import { useSelector } from "react-redux";
import { selectStep } from "../../state-management/registerhelper/registerhelper.selector";

function Register() {
  const step = useSelector(selectStep);
  let RegisterStyle;
  switch (step) {
    case 2:
      RegisterStyle = RegisterContainerPlan;
      break;
    // case 3:
    //   RegisterStyle = RegisterContainerPlan;
    //   break;
    default:
      RegisterStyle = RegisterContainer;
  }
  return (
    <RegisterStyle>
      <MainRegister />
    </RegisterStyle>
  );
}

export default Register;
