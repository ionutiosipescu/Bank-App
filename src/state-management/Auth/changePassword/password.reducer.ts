import { DataObjProps, AuthObjProps } from "./password.types";
import { AnyAction } from "redux";
import {
  setResetPassword,
  resetPassword,
  setAuthForm,
  setResetShowMsg,
  setPasswordData,
  setChangePassword,
} from "./password.action";
import {
  requestPasswordStart,
  requestPasswordFailed,
  requestPasswordSuccess,
} from "./password.service";

export type PasswordState = {
  readonly changePasswordData: DataObjProps;
  readonly auth: AuthObjProps;
  readonly isSubmiting: boolean;
  readonly showMessage: boolean;
  readonly errorMsg: string;
};

export const INITIAL_STATE: PasswordState = {
  changePasswordData: {
    password: "",
    confirmPassword: "",
  },
  auth: {
    username: "",
    password: "",
  },
  isSubmiting: false,
  showMessage: false,
  errorMsg: "",
};

export const changePasswordReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): PasswordState => {
  if (setChangePassword.match(action)) {
    return { ...state, changePasswordData: { ...action.payload } };
  }
  if (setResetPassword.match(action)) {
    return { ...state, changePasswordData: { ...action.payload } };
  }
  if (resetPassword.match(action)) {
    return INITIAL_STATE;
  }
  if (setAuthForm.match(action)) {
    return { ...state, auth: { ...action.payload } };
  }
  if (setResetShowMsg.match(action)) {
    return {
      ...state,
      showMessage: false,
    };
  }
  if (requestPasswordStart.match(action)) {
    return { ...state, isSubmiting: true };
  }
  if (requestPasswordSuccess.match(action)) {
    return { ...state, isSubmiting: false, showMessage: true };
  }
  if (requestPasswordFailed.match(action)) {
    return {
      ...state,
      isSubmiting: false,
      errorMsg: action.payload,
      showMessage: true,
    };
  }
  return state;
};
