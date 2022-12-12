import React from "react";
import UserProfileForm from "../UserProfileForm/UserProfileForm";
import FooterRegister from "../UI/FooterRegister/FooterRegister";
import HeroRegister from "../UI/HeroRegister/HeroRegister";
import { RegisterFormContainer } from "./RegisterForm.style";
import { FormWrapper } from "./../Form/Form.style";

function RegisterForm() {
  return (
    <FormWrapper>
      <RegisterFormContainer>
        <UserProfileForm />
        <FooterRegister />
      </RegisterFormContainer>
      <HeroRegister />
    </FormWrapper>
  );
}

export default RegisterForm;
