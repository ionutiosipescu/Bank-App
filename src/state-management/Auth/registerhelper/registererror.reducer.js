import { REGISTER_HELPER_TYPES } from "./registerhelper.types";

const INITIAL_STATE = {
  errorMsg: "",
  error: "",
};

export const registerErrorReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_HELPER_TYPES.SET_ERROR_MESSAGE:
      return { ...state, errorMsg: payload };
    case REGISTER_HELPER_TYPES.SET_REQUEST_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
