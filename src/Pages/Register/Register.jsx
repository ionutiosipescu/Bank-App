import React from "react";
import MainRegister from "../../features/register/MainRegister/MainRegister";
import { RegisterContainer } from "./Register.style";
import { useSelector } from "react-redux";
import { selectStep } from "../../state-management/registerhelper/registerhelper.selector";

function Register() {
  return (
    <RegisterContainer>
      <MainRegister />
    </RegisterContainer>
  );
}

export default Register;
