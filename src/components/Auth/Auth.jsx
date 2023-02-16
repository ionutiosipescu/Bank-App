import React from "react";
import { Formik, Form } from "formik";
import { RowSettingsSection } from "../../pages/Settings/Settings.style";
import CustomInput from "../CustomInputs/CustomInput";
import Button from "../UI/Button/Button";
import { AuthSchema } from "./ValidationSchema/ValidationSchema";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../state-management/Dashboard/settings/settings.selector";
import { setAuthForm } from "../../state-management/Dashboard/settings/settings.action";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";
import { selectSettingsData } from "../../state-management/Dashboard/settings/settings.selector";
import { fetchAuthData } from "../../state-management/Dashboard/settings/settings.service";

function Auth() {
  const dispatch = useDispatch();
  const userData = useSelector(selectCurrentUser);
  const settingsData = useSelector(selectSettingsData);
  const authData = useSelector(selectAuth);
  const { username, password } = authData;

  const setData = (e) => {
    dispatch(setAuthForm(authData, e));
  };

  const onSubmit = () => {
    dispatch(fetchAuthData(settingsData, userData, authData));
  };

  return (
    <Formik
      validationSchema={AuthSchema}
      initialValues={{ ...authData }}
      onSubmit={onSubmit}
    >
      <Form>
        <RowSettingsSection>
          <CustomInput
            label="Display Name"
            name="username"
            type="text"
            tall
            placeholder="Enter your display name"
            setData={setData}
            value={username || ""}
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            tall
            placeholder="Enter your password"
            setData={setData}
            value={password || ""}
          />
        </RowSettingsSection>
        <Button
          label="Save Settings"
          size="xl"
          primary="primary"
          type="submit"
        />
      </Form>
    </Formik>
  );
}

export default Auth;
