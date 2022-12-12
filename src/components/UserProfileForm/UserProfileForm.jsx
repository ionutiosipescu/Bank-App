import React from "react";
import UserProfileSectionOne from "../UserProfileSectionOne/UserProfileSectionOne";
import UserProfileSectionTwo from "../UserProfileSectionTwo/UserProfileSectionTwo";
import TermsAndCondition from "../UI/TermsAndConditions/TermsAndCondition";
import FooterRegister from "../UI/FooterRegister/FooterRegister";
import HeroRegister from "../UI/HeroRegister/HeroRegister";
import Button from "../UI/Button/Button";

function UserProfileForm() {
  return (
    <div className="register_wrapper">
      <div className="register_container">
        <h1>Register</h1>
        <div className="register_form_container">
          <div className="register_form_wrapper">
            <UserProfileSectionOne />
            <UserProfileSectionTwo />
          </div>
          <div className="checkbox-container">
            <TermsAndCondition />
            <Button label="Register" to="/dashboard" size="lg" isPrimary />
          </div>
        </div>
        <FooterRegister />
      </div>
      <HeroRegister />
    </div>
  );
}

export default UserProfileForm;
