import React from "react";
import DropDown from "../../components/DropDown/DropDown";
import RadioButton from "../../components/RadioButton/RadioButton";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import {
  AccountContainer,
  PreferenceContainer,
  RowSettingsSection,
  SectionContainer,
  SettingsContainer,
  SettingsSection,
} from "./Settings.style";

function Settings() {
  return (
    <SettingsContainer>
      <SectionContainer>
        <PreferenceContainer>
          <h2>Preference</h2>
          <SettingsSection>
            <RadioButton label="Notification" defaultMode={true} />
            <DropDown label="Language" />
            <RadioButton label="Dark Mode" defaultMode={false} />
          </SettingsSection>
        </PreferenceContainer>
        <AccountContainer>
          <h2>Account</h2>
          <RowSettingsSection>
            <Input label="Username" large />
            <Input label="Phone" large />
          </RowSettingsSection>
          <RowSettingsSection>
            <Input label="Email" large />
            <Input label="Password" large />
          </RowSettingsSection>
          <RowSettingsSection>
            <Input label="Address" placeholder="City" large />
            <Input placeholder="Number, Suite, etc ..." large />
          </RowSettingsSection>
        </AccountContainer>
      </SectionContainer>
      <Button label="Save Settings" size="xl" primary={true} />
    </SettingsContainer>
  );
}

export default Settings;
