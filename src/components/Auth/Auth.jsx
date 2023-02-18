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
import { TitleSettings } from "../../pages/Settings/Settings.style";
import StatusMessage from "../UI/StatusMessage/StatusMessage";
import { selectSettingErrorRequest } from "../../state-management/Dashboard/settings/settings.selector";
import { selectSettingIsSubmiting } from "../../state-management/Dashboard/settings/settings.selector";
import Spinner from "../Spinner/Spinner";
import { selectShowMessage } from "../../state-management/Dashboard/settings/settings.selector";
import {
  AuthRowSection,
  AuthWrapper,
  AuthButton,
  AuthContainer,
  AuthForm,
} from "./Auth.style";
import { selectPassword } from "../../state-management/Auth/changePassword/password.selector";
import { fetchAuthDataPassword } from "../../state-management/Dashboard/settings/settings.service";

function Auth() {
  const dispatch = useDispatch();
  const errorMsgRequest = useSelector(selectSettingErrorRequest);
  const showMessage = useSelector(selectShowMessage);
  const isSubmiting = useSelector(selectSettingIsSubmiting);
  const userData = useSelector(selectCurrentUser);
  // const settingsData = useSelector(selectSettingsData);
  const passwordData = useSelector(selectPassword);
  const authData = useSelector(selectAuth);
  const { username, password } = authData;

  const setData = (e) => {
    dispatch(setAuthForm(authData, e));
  };

  const onSubmit = () => {
    dispatch(fetchAuthDataPassword(passwordData, userData, authData));
  };

  return (
    <AuthWrapper>
      <AuthContainer>
        <TitleSettings>Authentication Requierd</TitleSettings>
        <Formik
          validationSchema={AuthSchema}
          initialValues={{ ...authData }}
          onSubmit={onSubmit}
        >
          <AuthForm>
            <AuthRowSection>
              <CustomInput
                label="Display Name"
                name="username"
                type="text"
                placeholder="Enter your display name"
                setData={setData}
                value={username || ""}
                tall
              />
              <CustomInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                setData={setData}
                value={password || ""}
                tall
              />
            </AuthRowSection>
            {isSubmiting ? (
              <Spinner size={"fit"} />
            ) : showMessage ? (
              <StatusMessage
                type={errorMsgRequest ? "error" : "success"}
                text={
                  errorMsgRequest
                    ? errorMsgRequest
                    : "Your account has been updated"
                }
                size="full"
              />
            ) : (
              <></>
            )}
            <AuthButton
              label="Submit Password"
              size="fullWidth"
              primary="primary"
              type="submit"
            />
          </AuthForm>
        </Formik>
      </AuthContainer>
    </AuthWrapper>
  );
}

export default Auth;
