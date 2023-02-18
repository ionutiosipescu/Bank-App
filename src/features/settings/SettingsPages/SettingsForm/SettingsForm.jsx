import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSettingsData } from "../../../../state-management/Dashboard/settings/settings.selector";
import { useState } from "react";
import { setSettingsForm } from "../../../../state-management/Dashboard/settings/settings.action";
import { Formik, Form } from "formik";
import CustomInputSettings from "../../../../components/CustomInputs/CustomInputSettings";
import {
  RowSettingsSection,
  FormCustomSettings,
  TitleSettings,
} from "../../../../pages/Settings/Settings.style";
import { settingsSchema } from "../../ValidationSchema/ValidationSchema";
import Button from "../../../../components/UI/Button/Button";
import { AccountContainer } from "../../../../pages/Settings/Settings.style";
import Auth from "../../../../components/Auth/Auth";
import { SettingsFormWrapper } from "../../../../pages/Settings/Settings.style";
import StatusMessage from "../../../../components/UI/StatusMessage/StatusMessage";
import { setResetShowMsg } from "../../../../state-management/Dashboard/settings/settings.action";
import { selectCurrentUser } from "../../../../state-management/Dashboard/userData/userData.selector";
import { useEffect } from "react";
import { fetchAuthData } from "../../../../state-management/Dashboard/settings/settings.service";
import { selectToken } from "../../../../state-management/Auth/registerhelper/registerhelper.selector";

function SettingsForm() {
  const dispatch = useDispatch();
  const settingsData = useSelector(selectSettingsData);
  const { first_name, last_name, address, mobile } = settingsData;
  const token = useSelector(selectToken);
  const [showAuth, handleShow] = useState(false);
  const userData = useSelector(selectCurrentUser);

  const setData = (e) => {
    dispatch(setSettingsForm(settingsData, e));
  };

  const onSubmit = () => {
    dispatch(fetchAuthData(settingsData, userData, token));
  };

  useEffect(() => {
    dispatch(setResetShowMsg());
  }, []);

  return (
    <SettingsFormWrapper>
      <TitleSettings>Edit Your Account</TitleSettings>
      <AccountContainer>
        <Formik
          validationSchema={settingsSchema}
          initialValues={{ ...settingsData }}
          onSubmit={onSubmit}
        >
          <FormCustomSettings>
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
            {/* {showAuth ? (
              <StatusMessage
                type="success"
                text={"You data was verified !"}
                size="full"
                // show={showAuth}
                // handleShow={handleShow}
              />
            ) : (
              <></>
            )} */}
            <Button
              label="Verify Data"
              size="xl"
              primary="primary"
              type="submit"
            />
          </FormCustomSettings>
        </Formik>
        {showAuth ? <Auth /> : <></>}
      </AccountContainer>
    </SettingsFormWrapper>
  );
}

export default SettingsForm;
