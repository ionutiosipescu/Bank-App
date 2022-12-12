import React from "react";
import "./Register.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { RegisterContainer } from "./Register.style";

function Register() {
  return (
    <RegisterContainer>
      <RegisterForm />
    </RegisterContainer>
  );
}

export default Register;
