import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import {
  AccountContainer,
  PreferenceContainer,
  SettingsContainer,
} from "./Settings.style";

function Settings() {
  return (
    <SettingsContainer>
      <PreferenceContainer>
        <h1>Preference</h1>
        <RadioButton label="Notification" defaultMode={true} />
        <RadioButton label="Dark Mode" defaultMode={false} />
      </PreferenceContainer>
      <AccountContainer>
        <h1>Account</h1>
      </AccountContainer>
    </SettingsContainer>
  );
}

export default Settings;
