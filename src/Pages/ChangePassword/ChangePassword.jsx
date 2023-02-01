import React from "react";
import { ChangedPasswordContainer } from "./ChangePassword.style";
import MainChangePassword from "../../features/changePassword/MainChangePassword/MainChangePassword";

function ChangePassword() {
  return (
    <ChangedPasswordContainer>
      <MainChangePassword />
    </ChangedPasswordContainer>
  );
}

export default ChangePassword;
