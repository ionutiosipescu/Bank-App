import { LOGIN_ACTION_TYPES } from "./loginUser.types";

const INITIAL_STATE = {
  LoginData: {
    username: "",
    password: "",
  },
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_ACTION_TYPES.SET_LOGIN_USER:
      return { ...state, LoginData: { ...payload } };
    default:
      return state;
  }
};
