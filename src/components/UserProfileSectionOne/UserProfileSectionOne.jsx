import React from "react";
import Input from "../UI/Input/Input";
import { RegisterFormPart } from "./UserProfileSectionOne.style";

function UserProfileSectionOne() {
  return (
    <form action="" className="register_form">
      <RegisterFormPart>
        <Input type="text" label="First Name" small />
        <Input type="text" label="Last Name" small />
      </RegisterFormPart>
      <Input type="email" label="Email" />
      <RegisterFormPart>
        <Input type="text" label="Address" small placeholder="City" />
        <Input type="text" small placeholder="Number, Suite, etc" />
      </RegisterFormPart>
    </form>
  );
}

export default UserProfileSectionOne;
