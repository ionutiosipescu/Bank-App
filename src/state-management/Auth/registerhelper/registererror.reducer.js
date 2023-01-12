import { REGISTER_HELPER_TYPES } from "./registerhelper.types";

const INITIAL_STATE = {
  errorMsg: "",
};

export const registerErrorReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_HELPER_TYPES.SET_ERROR_MESSAGE:
      return { ...state, errorMsg: payload };
    default:
      return state;
  }
};
