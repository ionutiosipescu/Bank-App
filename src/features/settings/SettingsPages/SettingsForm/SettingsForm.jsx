import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSettingsData,
  selectSettingErrorRequest,
  selectSettingIsSubmiting,
  selectSettingsShowMessage,
} from "../../../../state-management/Dashboard/settings/settings.selector";
import { setSettingsForm } from "../../../../state-management/Dashboard/settings/settings.action";
import { Formik } from "formik";
import CustomInputSettings from "../../../../components/CustomInputs/CustomInputSettings";
import {
  RowSettingsSection,
  FormCustomSettings,
  TitleSettings,
} from "../../../../pages/Settings/Settings.style";
import { settingsSchema } from "../../ValidationSchema/ValidationSchema";
import Button from "../../../../components/UI/Button/Button";
import {
  AccountContainer,
  SettingsFormWrapper,
} from "../../../../pages/Settings/Settings.style";
import { selectCurrentUser } from "../../../../state-management/Dashboard/userData/userData.selector";
import { fetchAuthData } from "../../../../state-management/Dashboard/settings/settings.service";
import { selectToken } from "../../../../state-management/Auth/register/register.selector";
import RequestMessage from "../../../../components/RequestMessage/RequestMessage";
import { setResetShowMsg } from "../../../../state-management/Dashboard/settings/settings.action";
import { selectCsrf } from "../../../../state-management/Auth/login/login.selector";

function SettingsForm() {
  const dispatch = useDispatch();
  const settingsData = useSelector(selectSettingsData);
  const { first_name, last_name, address, mobile } = settingsData;
  const token = useSelector(selectToken);
  const userData = useSelector(selectCurrentUser);
  const csrf = useSelector(selectCsrf);

  const errorMsgRequest = useSelector(selectSettingErrorRequest);
  const isSubmiting = useSelector(selectSettingIsSubmiting);
  const showMessage = useSelector(selectSettingsShowMessage);

  const setData = (e) => {
    dispatch(setSettingsForm(settingsData, e));
  };

  const onSubmit = () => {
    dispatch(fetchAuthData(settingsData, userData, token, csrf));
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
            <RequestMessage
              isSubmiting={isSubmiting}
              showMessage={showMessage}
              errorMsgRequest={errorMsgRequest}
              text="Your Profile has been Succesfuly Updated"
            />
            <Button
              label="Update Profile"
              size="xl"
              primary="primary"
              type="submit"
            />
          </FormCustomSettings>
        </Formik>
      </AccountContainer>
    </SettingsFormWrapper>
  );
}

export default SettingsForm;
