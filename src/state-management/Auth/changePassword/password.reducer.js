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
    case CHANGE_PASSWORD_TYPES.RESET_PASSWORD:
      return INITIAL_STATE;
    default:
      return state;
  }
};
