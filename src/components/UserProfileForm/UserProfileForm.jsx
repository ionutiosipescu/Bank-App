import React from "react";
import {
  RegisterFormPart,
  RegitsterFormContainer,
  RegisterFormWrapper,
  CheckboxContainer,
} from "./UserProfileForm.style";
import Input from "../UI/Input/Input";
import TermsAndCondition from "../UI/TermsAndConditions/TermsAndCondition";
import Button from "../UI/Button/Button";

function UserProfileForm() {
  return (
    <>
      <h1>Register</h1>
      <RegitsterFormContainer>
        <RegisterFormWrapper>
          <form action="" className="register_form">
            <div>
              <RegisterFormPart>
                <Input type="text" label="First Name" small />
                <Input type="text" label="Last Name" small />
              </RegisterFormPart>
              <Input type="email" label="Email" />
              <RegisterFormPart>
                <Input type="text" label="Address" small placeholder="City" />
                <Input type="text" small placeholder="Number, Suite, etc" />
              </RegisterFormPart>
            </div>
            <div>
              <RegisterFormPart>
                <Input type="text" label="Username" small />
                <Input type="text" label="Mobile Number" small />
              </RegisterFormPart>
              <RegisterFormPart>
                <Input type="text" label="Sex" small />
                <Input type="date" label="Birth Date" small />
              </RegisterFormPart>
              <RegisterFormPart>
                <Input type="password" label="Password" small />
                <Input type="password" label="Confirm Password" small />
              </RegisterFormPart>
            </div>
          </form>
        </RegisterFormWrapper>
        <CheckboxContainer>
          <TermsAndCondition />
          <Button label="Register" to="/dashboard" size="lg" isPrimary />
        </CheckboxContainer>
      </RegitsterFormContainer>
    </>
  );
}

export default UserProfileForm;
