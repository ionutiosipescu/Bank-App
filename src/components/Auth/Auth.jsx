import React, { useEffect } from "react";
import { Formik } from "formik";
import CustomInput from "../CustomInputs/CustomInput";
import { AuthSchema } from "./ValidationSchema/ValidationSchema";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";
import { TitleSettings } from "../../pages/Settings/Settings.style";
import StatusMessage from "../UI/StatusMessage/StatusMessage";
import Spinner from "../Spinner/Spinner";
import {
  AuthRowSection,
  AuthWrapper,
  AuthButton,
  AuthContainer,
  AuthForm,
} from "./Auth.style";
import { selectPassword } from "../../state-management/Auth/changePassword/password.selector";
import { fetchAuthDataPassword } from "../../state-management/Auth/changePassword/password.service";

import { setAuthForm } from "../../state-management/Auth/changePassword/password.action";
import { selectSettingErrorRequest } from "../../state-management/Auth/changePassword/password.selector";
import { selectSettingIsSubmiting } from "../../state-management/Auth/changePassword/password.selector";
import { selectShowMessage } from "../../state-management/Auth/changePassword/password.selector";
import { selectAuth } from "../../state-management/Auth/changePassword/password.selector";
import { setResetShowMsg } from "../../state-management/Auth/changePassword/password.action";
import RequestMessage from "../../components/RequestMessage/RequestMessage";

function Auth() {
  const dispatch = useDispatch();
  const errorMsgRequest = useSelector(selectSettingErrorRequest);
  const showMessage = useSelector(selectShowMessage);
  const isSubmiting = useSelector(selectSettingIsSubmiting);
  const userData = useSelector(selectCurrentUser);
  const passwordData = useSelector(selectPassword);
  const authData = useSelector(selectAuth);
  const { username, password } = authData;

  const setData = (e) => {
    dispatch(setAuthForm(authData, e));
  };

  const onSubmit = () => {
    dispatch(fetchAuthDataPassword(passwordData, authData));
  };

  useEffect(() => {
    dispatch(setResetShowMsg());
  }, []);

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
            <RequestMessage
              isSubmiting={isSubmiting}
              showMessage={showMessage}
              errorMsgRequest={errorMsgRequest}
              text="Your Password has been Succesfuly Changed"
            />
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
