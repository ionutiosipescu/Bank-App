import React from "react";
import { SectionContainer, SettingsContainer } from "./Settings.style";
import SettingsForm from "../../features/settings/SettingsPages/SettingsForm/SettingsForm";
import PreferenceControler from "../../features/settings/SettingsPages/PreferenceControler/PreferenceContainer";

function Settings() {
  return (
    <SettingsContainer>
      <SectionContainer>
        <PreferenceControler />
        <SettingsForm />
      </SectionContainer>
    </SettingsContainer>
  );
}

export default Settings;
