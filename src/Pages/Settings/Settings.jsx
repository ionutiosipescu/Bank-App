import React, { useEffect } from "react";
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
import { Formik, Form } from "formik";
import CustomInput from "../../components/CustomInputs/CustomInput";
import { useSelector, useDispatch } from "react-redux";
import { selectSettingsData } from "../../state-management/Dashboard/settings/settings.selector";
import { settingsSchema } from "../../features/settings/ValidationSchema/ValidationSchema";
import { debounce } from "debounce";
import {
  setSettingsForm,
  resetForm,
} from "../../state-management/Dashboard/settings/settings.action";
import { fetchSettingsData } from "../../state-management/Dashboard/settings/settings.service";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";
import Auth from "../../components/Auth/Auth";
import { useState } from "react";
import CustomInputSettings from "../../components/CustomInputs/CustomInputSettings";
import { setValidateForm } from "../../state-management/Dashboard/settings/settings.action";
import { selectValidateForm } from "../../state-management/Dashboard/settings/settings.selector";

function Settings() {
  const dispatch = useDispatch();
  const settingsData = useSelector(selectSettingsData);
  const { first_name, last_name, address, mobile } = settingsData;
  const [showAuth, setShowAuth] = useState(false);

  const setData = (e) => {
    console.log(e.target.value);
    dispatch(setSettingsForm(settingsData, e));
  };

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
          <Formik
            validationSchema={settingsSchema}
            initialValues={{ ...settingsData }}
            onSubmit={(isValid) => {
              if (isValid) {
                setShowAuth(true);
              } else {
                setShowAuth(false);
              }
            }}
          >
            <Form>
              <RowSettingsSection>
                <CustomInputSettings
                  label="Firstname"
                  name="first_name"
                  type="text"
                  tall
                  placeholder="Enter your firstname"
                  setData={setData}
                  value={first_name || ""}
                />
                <CustomInputSettings
                  label="Lastname"
                  name="last_name"
                  type="text"
                  tall
                  placeholder="Enter your lastname"
                  setData={setData}
                  value={last_name || ""}
                />
              </RowSettingsSection>
              <RowSettingsSection>
                <CustomInputSettings
                  label="Phone number"
                  name="mobile"
                  type="number"
                  tall
                  placeholder="Enter your phone number"
                  setData={setData}
                  value={mobile || ""}
                />
                <CustomInputSettings
                  label="Address"
                  name="address"
                  type="text"
                  tall
                  placeholder="Enter your address"
                  setData={setData}
                  value={address || ""}
                />
              </RowSettingsSection>
              <Button
                label="Verify Data"
                size="xl"
                primary="primary"
                type="submit"
              />
            </Form>
          </Formik>
          {showAuth ? <Auth /> : <></>}
        </AccountContainer>
      </SectionContainer>
    </SettingsContainer>
  );
}

export default Settings;
