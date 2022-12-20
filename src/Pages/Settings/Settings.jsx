import React from "react";
import DropDown from "../../components/DropDown/DropDown";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/UI/Button/Button";
import {
  AccountContainer,
  PreferenceContainer,
  SectionContainer,
  SettingsContainer,
  SettingsSection,
} from "./Settings.style";

function Settings() {
  return (
    <SettingsContainer>
      <SectionContainer>
        <PreferenceContainer>
          <h1>Preference</h1>
          <SettingsSection>
            <RadioButton label="Notification" defaultMode={true} />
            <DropDown label="Language" />
            <RadioButton label="Dark Mode" defaultMode={false} />
          </SettingsSection>
        </PreferenceContainer>
        <AccountContainer>
          <h1>Account</h1>
        </AccountContainer>
      </SectionContainer>
      <Button label="Save Settings" size="xl" primary={true} />
    </SettingsContainer>
  );
}

export default Settings;
