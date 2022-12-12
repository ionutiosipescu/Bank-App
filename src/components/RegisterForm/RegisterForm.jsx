import React from "react";
import UserProfileForm from "../UserProfileForm/UserProfileForm";
import FooterRegister from "../UI/FooterRegister/FooterRegister";
import HeroRegister from "../UI/HeroRegister/HeroRegister";
import { RegisterWrapper, RegisterContainer } from "./RegisterForm.style";

function RegisterForm() {
  return (
    <RegisterWrapper>
      <RegisterContainer>
        <UserProfileForm />
        <FooterRegister />
      </RegisterContainer>
      <HeroRegister />
    </RegisterWrapper>
  );
}

export default RegisterForm;
