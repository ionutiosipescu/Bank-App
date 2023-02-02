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
            <span>
              <p>Night Mode</p>
              <br />
              <RadioButton
                label="Notification"
                defaultMode={true}
                firstText="On"
                secondText="Off"
              />
            </span>
            <DropDown
              label="Language"
              items={["English", "Romanian", "French"]}
            />
            <span>
              <p>Notifications</p>
              <br />
              <RadioButton
                label="Dark Mode"
                defaultMode={false}
                firstText="On"
                secondText="Off"
              />
            </span>
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
      <Button label="Save Settings" size="xl" primary="primary" />
    </SettingsContainer>
  );
}

export default Settings;
