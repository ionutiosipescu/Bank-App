import React from "react";
import { Formik, Form } from "formik";
import { RowSettingsSection } from "../../pages/Settings/Settings.style";
import CustomInput from "../CustomInputs/CustomInput";
import Button from "../UI/Button/Button";
import { AuthSchema } from "./ValidationSchema/ValidationSchema";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../state-management/Dashboard/userData/userData.selector";
import { setAuthForm } from "../../state-management/Dashboard/userData/userData.action";
import { fetchAuthData } from "../../state-management/Dashboard/userData/userData.service";
import { selectCurrentUser } from "../../state-management/Dashboard/userData/userData.selector";

function Auth({ ...props }) {
  const dispatch = useDispatch();
  const { data } = props;
  const userData = useSelector(selectCurrentUser);
  const authData = useSelector(selectAuth);

  const setData = (e) => {
    dispatch(setAuthForm(authData, e));
  };

  const onSubmit = () => {
    dispatch(fetchAuthData(data, userData, authData));
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
            //   value={username || ""}
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            tall
            placeholder="Enter your password"
            setData={setData}
            //   value={password || ""}
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
