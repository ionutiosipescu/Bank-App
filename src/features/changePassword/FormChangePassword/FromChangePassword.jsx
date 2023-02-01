import React from "react";
import { Formik, Form } from "formik";
import { FormContainerChangePassword } from "./FormChangePassword.style";
import Button from "../../../components/UI/Button/Button";
import { ErrorMsg } from "../../../components/Errors/Auth/ErrorMsg.style";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import CustomPassword from "../../../components/CustomInputs/CustomPassword";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setChangePassword } from "../../../state-management/Auth/changePassword/password.action";
import { selectPassword } from "../../../state-management/Auth/changePassword/password.selector";
import { ChangePasswordSchema } from "../ValidationSchema/ValidationSchema";

function FromChangePassword() {
  const dispatch = useDispatch();
  const passwordData = useSelector(selectPassword);

  const setData = (e) => {
    dispatch(setChangePassword(passwordData, e));
  };

  const handleSubmit = () => {
    console.log(passwordData);
  };

  return (
    <Formik
      initialValues={{ ...passwordData }}
      validationSchema={ChangePasswordSchema}
      onSubmit={handleSubmit}
    >
      <FormContainerChangePassword>
        <CustomInput
          label="New Password"
          name="password"
          type="password"
          placeholder="Enter your password"
          setData={setData}
        />
        <CustomInput
          label="Confirm New Password"
          name="confirmPassword"
          type="password"
          placeholder="Enter your password"
          setData={setData}
        />
        <Button type="submit">Change Password</Button>
      </FormContainerChangePassword>
    </Formik>
  );
}

export default FromChangePassword;
