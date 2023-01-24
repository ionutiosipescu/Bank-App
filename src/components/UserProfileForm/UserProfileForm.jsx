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
import { useState } from "react";

const defaultFormFields = {
  lastName: "",
  firstName: "",
  email: "",
  city: "",
  number: "",
  displayName: "",
  mobile: "",
  birthDate: "",
  gender: "",
  password: "",
  confirmPassword: "",
};

function UserProfileForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName,
    email,
    password,
    confirmPassword,
    lastName,
    firstName,
    city,
    number,
    mobile,
    birthDate,
    gender,
  } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);
  return (
    <>
      <h1>Register</h1>
      <RegitsterFormContainer>
        <RegisterFormWrapper>
          <form action="" className="register-form">
            <div>
              <RegisterFormPart>
                <Input
                  onChange={handleChange}
                  type="text"
                  label="First Name"
                  small
                  name="firstName"
                  value={firstName}
                />
                <Input
                  onChange={handleChange}
                  type="text"
                  label="Last Name"
                  small
                  name="lastName"
                  value={lastName}
                />
              </RegisterFormPart>
              <Input type="email" label="Email" value={email} name="email" />
              <RegisterFormPart>
                <Input
                  onChange={handleChange}
                  type="text"
                  label="Address"
                  small
                  placeholder="City"
                  value={city}
                  name="city"
                />
                <Input
                  onChange={handleChange}
                  type="text"
                  small
                  placeholder="Number, Suite, etc"
                  value={number}
                  name="number"
                />
              </RegisterFormPart>
            </div>
            <div>
              <RegisterFormPart>
                <Input
                  onChange={handleChange}
                  type="text"
                  label="Username"
                  small
                  value={displayName}
                  name="displayName"
                />
                <Input
                  onChange={handleChange}
                  type="text"
                  label="Mobile Number"
                  small
                  value={mobile}
                  name="mobile"
                />
              </RegisterFormPart>
              <RegisterFormPart>
                <Input
                  onChange={handleChange}
                  type="text"
                  label="Gender"
                  small
                  value={gender}
                  name="gender"
                />
                <Input
                  onChange={handleChange}
                  type="date"
                  label="Birth Date"
                  small
                  value={birthDate}
                  name="birthDate"
                />
              </RegisterFormPart>
              <RegisterFormPart>
                <Input
                  onChange={handleChange}
                  type="password"
                  label="Password"
                  small
                  value={password}
                  name="password"
                />
                <Input
                  onChange={handleChange}
                  type="password"
                  label="Confirm Password"
                  small
                  value={confirmPassword}
                  name="confirmPassword"
                />
              </RegisterFormPart>
            </div>
          </form>
        </RegisterFormWrapper>
        <CheckboxContainer>
          <TermsAndCondition />
          <Button
            label="Register"
            to="/dashboard"
            size="lg"
            primary="primary"
          />
        </CheckboxContainer>
      </RegitsterFormContainer>
    </>
  );
}

export default UserProfileForm;
