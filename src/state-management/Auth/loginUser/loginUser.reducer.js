import { LOGIN_ACTION_TYPES } from "./loginUser.types";

const INITIAL_STATE = {
  LoginData: {
    username: "",
    password: "",
  },
  isSubmiting: false,
  errorMsg: "",
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_ACTION_TYPES.SET_LOGIN_USER:
      return { ...state, LoginData: { ...payload } };
    case LOGIN_ACTION_TYPES.SET_IS_SUBMITING:
      return { ...state, isSubmiting: payload };
    case LOGIN_ACTION_TYPES.SET_ERROR_MESSAGE:
      return { ...state, errorMsg: payload };
    default:
      return state;
  }
};
