import { LOGIN_ACTION_TYPES } from "./login.types";

const INITIAL_STATE = {
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

export const loginReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_ACTION_TYPES.SET_LOGIN_USER:
      return { ...state, LoginData: { ...payload } };
    case LOGIN_ACTION_TYPES.POST_LOGIN_START:
      return { ...state, isSubmiting: true };
    case LOGIN_ACTION_TYPES.POST_LOGIN_SUCCESS:
      return { ...state, isSubmiting: false };
    case LOGIN_ACTION_TYPES.POST_LOGIN_FAILED:
      return { ...state, isSubmiting: false, errorMsg: payload };
    case LOGIN_ACTION_TYPES.SET_OTP_ERROR:
      return { ...state, otpError: payload };
    case LOGIN_ACTION_TYPES.SET_OTP:
      return { ...state, otp: payload };
    case LOGIN_ACTION_TYPES.SET_MODAL_IS_OPEN:
      return { ...state, modalIsOpen: payload };
    case LOGIN_ACTION_TYPES.SET_EMAIL_VALIDATE:
      return { ...state, emailValidate: payload };
    case LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_START:
      return { ...state, isSubmitingOtp: true };
    case LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_SUCCESS:
      return {
        ...state,
        isSubmitingOtp: false,
        showMessageOtp: true,
        errorMsgOtp: "",
      };
    case LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_FAILED:
      return {
        ...state,
        isSubmitingOtp: false,
        showMessageOtp: true,
        errorMsgOtp: payload,
      };
    case LOGIN_ACTION_TYPES.RESET_SHOW_MSG:
      return {
        ...state,
        showMessageOtp: false,
        errorMsgOtp: "",
      };
    case LOGIN_ACTION_TYPES.RESET_SIGNIN:
      return INITIAL_STATE;
    default:
      return state;
  }
};
