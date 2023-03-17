import { LOGIN_ACTION_TYPES, LoginData } from "./login.types";
import { AnyAction } from "redux";
import {
  setlogin,
  setOtpError,
  setOtp,
  setModalIsOpen,
  setEmailValidate,
  setResetShowMsg,
  resetLogIn,
} from "./login.action";
import {
  postLoginStart,
  postLoginFailed,
  postLoginSuccess,
  requestLogInOtpFailed,
  requestLogInOtpStart,
  requestLogInOtpSuccess,
} from "./login.service";

export type LogInState = {
  readonly LoginData: LoginData;
  readonly emailValidate: string;
  readonly isSubmiting: Boolean;
  readonly errorMsg: string;
  readonly modalIsOpen: Boolean;
  readonly otpError: string;
  readonly otp: string;
  readonly isSubmitingOtp: Boolean;
  readonly showMessageOtp: Boolean;
  readonly errorMsgOtp: string;
};

export const INITIAL_STATE: LogInState = {
  LoginData: {
    username: "",
    password: "",
  },
  emailValidate: "",
  isSubmiting: false,
  errorMsg: "",
  modalIsOpen: false,
  otpError: "",
  otp: "",
  isSubmitingOtp: false,
  showMessageOtp: false,
  errorMsgOtp: "",
};

export const loginReducer = (
  state = INITIAL_STATE,
  action = {} as AnyAction
): LogInState => {
  if (setlogin.match(action)) {
    return { ...state, LoginData: { ...action.payload } };
  }
  if (postLoginStart.match(action)) {
    return { ...state, isSubmiting: true };
  }
  if (postLoginSuccess.match(action)) {
    return { ...state, isSubmiting: false };
  }
  if (postLoginFailed.match(action)) {
    return { ...state, isSubmiting: false, errorMsg: action.payload };
  }
  if (requestLogInOtpStart.match(action)) {
    return { ...state, isSubmitingOtp: true };
  }
  if (requestLogInOtpSuccess.match(action)) {
    return {
      ...state,
      isSubmitingOtp: false,
      showMessageOtp: true,
      errorMsgOtp: "",
    };
  }
  if (requestLogInOtpFailed.match(action)) {
    return {
      ...state,
      isSubmitingOtp: false,
      showMessageOtp: true,
      errorMsgOtp: action.payload,
    };
  }
  if (setOtpError.match(action)) {
    return { ...state, otpError: action.payload };
  }
  if (setOtp.match(action)) {
    return { ...state, otp: action.payload };
  }
  if (setModalIsOpen.match(action)) {
    return { ...state, modalIsOpen: action.payload };
  }
  if (setEmailValidate.match(action)) {
    return { ...state, emailValidate: action.payload };
  }
  if (setResetShowMsg.match(action)) {
    return {
      ...state,
      showMessageOtp: false,
      errorMsgOtp: "",
    };
  }
  if (resetLogIn.match(action)) {
    return INITIAL_STATE;
  }
  return state;
};
