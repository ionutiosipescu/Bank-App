import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import {
  FormContainerChangePassword,
  ButtonChangePassword,
} from "./FormChangePassword.style";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setChangePassword } from "../../../state-management/Auth/changePassword/password.action";
import { selectPassword } from "../../../state-management/Auth/changePassword/password.selector";
import { ChangePasswordSchema } from "../ValidationSchema/ValidationSchema";
import { setResetPassword } from "../../../state-management/Auth/changePassword/password.action";
import Auth from "../../../components/Auth/Auth";
import Modal from "../../../components/Modal/Modal";
import { setPasswordData } from "../../../state-management/Auth/changePassword/password.action";
import { setResetPasswordData } from "../../../state-management/Auth/changePassword/password.action";

function FromChangePassword() {
  const dispatch = useDispatch();
  const passwordData = useSelector(selectPassword);
  const [show, setShow] = useState(false);
  const { password, confirmPassword } = passwordData;

  const setData = (e) => {
    const { name, value } = e.target;
    const eventObj = {
      name: name,
      value: value,
    };
    dispatch(setPasswordData(passwordData, eventObj));
  };

  const handleModalClose = () => {
    setShow(false);
    dispatch(setResetPassword());
  };

  useEffect(() => {
    setShow(false);
    dispatch(setResetPasswordData());
  }, []);

  return (
    <>
      <Formik
        initialValues={{ ...passwordData }}
        validationSchema={ChangePasswordSchema}
        onSubmit={(isValid) => {
          if (!isValid) return;
          if (isValid) {
            setShow(true);
          }
        }}
      >
        <FormContainerChangePassword>
          <CustomInput
            label="New Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            setData={setData}
            value={password || ""}
          />
          <CustomInput
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            placeholder="Enter your password"
            setData={setData}
            value={confirmPassword || ""}
          />
          <ButtonChangePassword type="submit">
            Change Password
          </ButtonChangePassword>
        </FormContainerChangePassword>
      </Formik>
      <Modal opened={show} handleClick={handleModalClose}>
        <Auth />
      </Modal>
    </>
  );
}

export default FromChangePassword;
