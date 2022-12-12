import React from "react";
import "./Register.css";
import UserProfileForm from "../../components/UserProfileForm/UserProfileForm";
import { RegisterContainer } from "./Register.style";

function Register() {
  return (
    <RegisterContainer>
      <UserProfileForm />
    </RegisterContainer>
  );
}

export default Register;
