import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import {
  FormContainerChangePassword,
  ButtonChangePassword,
} from "./FormChangePassword.style";
import Button from "../../../components/UI/Button/Button";
import { ErrorMsg } from "../../../components/Errors/Auth/ErrorMsg.style";
import CustomInput from "../../../components/CustomInputs/CustomInput";
import CustomPassword from "../../../components/CustomInputs/CustomPassword";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setChangePassword } from "../../../state-management/Auth/changePassword/password.action";
import { selectPassword } from "../../../state-management/Auth/changePassword/password.selector";
import { ChangePasswordSchema } from "../ValidationSchema/ValidationSchema";
import { setResetPassword } from "../../../state-management/Auth/changePassword/password.action";
import Auth from "../../../components/Auth/Auth";
import Modal from "../../../components/Modal/Modal";

function FromChangePassword() {
  const dispatch = useDispatch();
  const passwordData = useSelector(selectPassword);
  const [show, setShow] = useState(false);
  const { password, confirmPassword } = passwordData;

  const setData = (e) => {
    dispatch(setChangePassword(passwordData, e));
  };

  const handleModalClose = () => {
    setShow(false);
    dispatch(setResetPassword());
  };

  useEffect(() => {
    setShow(false);
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
