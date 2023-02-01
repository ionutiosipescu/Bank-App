import { CHANGE_PASSWORD_TYPES } from "./password.types";

const INITIAL_STATE = {
  changePasswordData: {
    password: "",
    confirmPassword: "",
  },
};

export const changePasswordReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_PASSWORD_TYPES.SET_PASSWORD:
      return { ...state, changePasswordData: { ...payload } };
    default:
      return state;
  }
};
