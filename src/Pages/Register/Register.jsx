import React from "react";
import "./Register.css";
import MainRegister from "../../features/register/MainRegister/MainRegister";
import { RegisterContainer } from "./Register.style";

function Register() {
  return (
    <RegisterContainer>
      <MainRegister />
    </RegisterContainer>
  );
}

export default Register;
