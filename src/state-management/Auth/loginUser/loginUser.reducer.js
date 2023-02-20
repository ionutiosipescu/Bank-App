import { LOGIN_ACTION_TYPES } from "./loginUser.types";

const INITIAL_STATE = {
  LoginData: {
    username: "",
    password: "",
  },
  isSubmiting: false,
  errorMsg: "",
  otp: "",
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
    case LOGIN_ACTION_TYPES.RESET_SIGNIN:
      return INITIAL_STATE;
    case LOGIN_ACTION_TYPES.SET_OTP:
      return { ...state, otp: payload };
    default:
      return state;
  }
};
