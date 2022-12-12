import React from "react";
import Input from "../UI/Input/Input";

function UserProfileSectionTwo() {
  return (
    <form action="" className="register_form">
      <div className="register_form_part">
        <Input type="text" label="Username" size="small" />
        <Input type="text" label="Mobile Number" size="small" />
      </div>
      <div className="register_form_part">
        <Input type="text" label="Sex" size="small" />
        <Input type="date" label="Birth Date" size="small" />
      </div>
      <div className="register_form_part">
        <Input type="password" label="Password" size="small" />
        <Input type="password" label="Confirm Password" size="small" />
      </div>
    </form>
  );
}

export default UserProfileSectionTwo;
