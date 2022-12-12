import React from "react";
import Input from "../UI/Input/Input";

function UserProfileSectionOne() {
  return (
    <form action="" className="register_form">
      <div className="register_form_part">
        <Input type="text" label="First Name" size="small" />
        <Input type="text" label="Last Name" size="small" />
      </div>
      <Input type="email" label="Email" />
      <div className="register_form_part">
        <Input type="text" label="Address" size="small" placeholder="City" />
        <Input type="text" size="small" placeholder="Number, Suite, etc" />
      </div>
    </form>
  );
}

export default UserProfileSectionOne;
