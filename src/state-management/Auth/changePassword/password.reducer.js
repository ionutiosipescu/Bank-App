import { CHANGE_PASSWORD_TYPES } from "./password.types";

const INITIAL_STATE = {
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

export const changePasswordReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_PASSWORD_TYPES.SET_PASSWORD:
      return { ...state, changePasswordData: { ...payload } };
    case CHANGE_PASSWORD_TYPES.RESET_PASSWORD:
      return INITIAL_STATE;
    case CHANGE_PASSWORD_TYPES.SET_AUTH:
      return { ...state, auth: { ...payload } };
    case CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_START:
      return { ...state, isSubmiting: true };
    case CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_SUCCESS:
      return { ...state, isSubmiting: false, showMessage: true };
    case CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_FAILED:
      return {
        ...state,
        isSubmiting: false,
        errorMsg: payload,
        showMessage: true,
      };
    case CHANGE_PASSWORD_TYPES.RESET_SHOW_MSG:
      return {
        ...state,
        showMessage: false,
      };
    default:
      return state;
  }
};
