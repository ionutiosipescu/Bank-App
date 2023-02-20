import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { CHANGE_PASSWORD_TYPES } from "./password.types";

const updateChangePassword = (password, e) => {
  const { name, value } = e.target;
  return { ...password, [name]: value };
};

export const setChangePassword = (password, e) => {
  const updateObj = updateChangePassword(password, e);
  return createAction(CHANGE_PASSWORD_TYPES.SET_PASSWORD, updateObj);
};

export const setResetPassword = () => {
  const updateObj = { password: "", confirmPassword: "" };
  return createAction(CHANGE_PASSWORD_TYPES.SET_PASSWORD, updateObj);
};

// Generate Obj for Request
export const setObjPassword = async (dataObj, authData) => {
  const { password } = dataObj;
  const { username } = authData;
  const objectPasswordRequest = {
    username: username,
    password: password,
  };
  console.log(objectPasswordRequest);
  return objectPasswordRequest;
};

export const resetPassword = () => {
  return createAction(CHANGE_PASSWORD_TYPES.RESET_PASSWORD);
};
