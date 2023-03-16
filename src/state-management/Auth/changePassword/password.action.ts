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
} from "./password.types";

export type UpdateChangePassword = ActionWithPayload<
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

const updateChangePassword = (
  password: DataObjProps,
  e: React.ChangeEvent<HTMLInputElement>
): DataObjProps => {
  const { name, value } = e.target;
  return { ...password, [name]: value };
};

export const setChangePassword = withMatcher(
  ({ password, e }: PasswordProps): UpdateChangePassword => {
    const updateObj = updateChangePassword(password, e);
    return createAction(CHANGE_PASSWORD_TYPES.SET_PASSWORD, updateObj);
  }
);

export const setResetPassword = withMatcher((): SetResetPassword => {
  const updateObj = { password: "", confirmPassword: "" };
  return createAction(CHANGE_PASSWORD_TYPES.SET_PASSWORD, updateObj);
});

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

const updateAuthForm = (
  authData: AuthObjProps,
  e: React.ChangeEvent<HTMLInputElement>
): AuthObjProps => {
  const { name, value } = e.target;
  return { ...authData, [name]: value };
};

// Update Auth Form
export const setAuthForm = withMatcher(
  ({ authData, e }: UpdateAuthProps): SetAuthForm => {
    const authObj = updateAuthForm(authData, e);
    return createAction(CHANGE_PASSWORD_TYPES.SET_AUTH, authObj);
  }
);

// Reset Show Message
export const setResetShowMsg = withMatcher((): SetResetShowMsg => {
  return createAction(CHANGE_PASSWORD_TYPES.RESET_SHOW_MSG);
});
