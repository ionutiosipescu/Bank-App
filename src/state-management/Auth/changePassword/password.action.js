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

const updateAuthForm = (authData, e) => {
  const { name, value } = e.target;
  return { ...authData, [name]: value };
};

// Update Auth Form
export const setAuthForm = (authData, e) => {
  const authObj = updateAuthForm(authData, e);
  return createAction(CHANGE_PASSWORD_TYPES.SET_AUTH, authObj);
};

// Reset Show Message
export const setResetShowMsg = () => {
  return createAction(CHANGE_PASSWORD_TYPES.RESET_SHOW_MSG);
};
