import React from "react";
import RadioButton from "../../../../components/RadioButton/RadioButton";
import {
  PreferenceContainer,
  SettingsSection,
} from "../../../../pages/Settings/Settings.style";
import DropDown from "../../../../components/DropDown/DropDown";
import DarkModeToggle from "../../DarkModeToggle/DarkModeToggle";

function PreferenceControler() {
  return (
    <PreferenceContainer>
      <h2>Preference</h2>
      <SettingsSection>
        <span>
          <p>Night Mode</p>
          <DarkModeToggle />
        </span>
        <DropDown label="Language" items={["English", "Romanian", "French"]} />
        <span>
          <p>Notifications</p>
          <RadioButton
            label="Dark Mode"
            defaultMode={false}
            firstText="On"
            secondText="Off"
          />
        </span>
      </SettingsSection>
    </PreferenceContainer>
  );
}

export default PreferenceControler;
