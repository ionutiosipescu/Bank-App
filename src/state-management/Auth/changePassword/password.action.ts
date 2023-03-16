import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../../utils/helpers/reducer/reducer.utils";
import React, { ChangeEvent } from "react";
import {
  CHANGE_PASSWORD_TYPES,
  DataObjProps,
  PasswordProps,
  SetPasswordProps,
  AuthObjProps,
  UpdateAuthProps,
  EventObj,
} from "./password.types";
import {
  RequestPasswordStart,
  RequestPasswordFailed,
  RequestPasswordSuccess,
} from "./password.service";

export type SetChangePassword = ActionWithPayload<
  CHANGE_PASSWORD_TYPES.SET_PASSWORD,
  DataObjProps
>;

export type SetResetPassword = ActionWithPayload<
  CHANGE_PASSWORD_TYPES.SET_PASSWORD,
  DataObjProps
>;

export type ResetPassword = Action<CHANGE_PASSWORD_TYPES.RESET_PASSWORD>;

export type SetAuthForm = ActionWithPayload<
  CHANGE_PASSWORD_TYPES.SET_AUTH,
  AuthObjProps
>;

export type SetResetShowMsg = Action<CHANGE_PASSWORD_TYPES.RESET_SHOW_MSG>;

// ^Update Password Form
const updateChangePassword = (
  password: DataObjProps,
  e: EventObj
): DataObjProps => {
  const { name, value } = e;
  return { ...password, [name]: value };
};

export const setPasswordData = (password: DataObjProps, e: EventObj) => {
  console.log(e, password);
  const passdata = updateChangePassword(password, e);
  return setChangePassword(passdata);
};

export const setChangePassword = withMatcher(
  (passdata: DataObjProps): SetChangePassword => {
    return createAction(CHANGE_PASSWORD_TYPES.SET_PASSWORD, passdata);
  }
);

// ^Reset Password Form
export const setResetPasswordData = () => {
  const updateObj = { password: "", confirmPassword: "" };
  return setResetPassword(updateObj);
};

export const setResetPassword = withMatcher(
  (updateObj: DataObjProps): SetResetPassword => {
    return createAction(CHANGE_PASSWORD_TYPES.SET_PASSWORD, updateObj);
  }
);

// Generate Obj for Request
export const setObjPassword = async (
  dataObj: DataObjProps,
  authData: AuthObjProps
) => {
  const { password } = dataObj;
  const { username } = authData;
  const objectPasswordRequest = {
    username: username,
    password: password,
  };
  console.log(objectPasswordRequest);
  return objectPasswordRequest;
};

export const resetPassword = withMatcher((): ResetPassword => {
  return createAction(CHANGE_PASSWORD_TYPES.RESET_PASSWORD);
});

const updateAuthForm = (authData: AuthObjProps, e: EventObj): AuthObjProps => {
  const { name, value } = e;
  return { ...authData, [name]: value };
};

// ^Update Auth Form
export const setAuthFormData = (authData: AuthObjProps, e: EventObj) => {
  const authObj = updateAuthForm(authData, e);
  return setAuthForm(authObj);
};

export const setAuthForm = withMatcher((authObj: AuthObjProps): SetAuthForm => {
  return createAction(CHANGE_PASSWORD_TYPES.SET_AUTH, authObj);
});

// Reset Show Message
export const setResetShowMsg = withMatcher((): SetResetShowMsg => {
  return createAction(CHANGE_PASSWORD_TYPES.RESET_SHOW_MSG);
});
