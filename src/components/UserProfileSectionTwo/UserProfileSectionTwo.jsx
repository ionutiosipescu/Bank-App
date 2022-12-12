import React from "react";
import Input from "../UI/Input/Input";
import { RegisterFormPart } from "../UserProfileSectionOne/UserProfileSectionOne.style";

function UserProfileSectionTwo() {
  return (
    <form action="" className="register_form">
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
    </form>
  );
}

export default UserProfileSectionTwo;
