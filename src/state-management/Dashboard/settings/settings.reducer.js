import { SETTINGS_TYPES } from "./settings.types";

const INITIAL_STATE = {
  settingsData: {
    mobile: "",
    address: "",
    first_name: "",
    last_name: "",
  },
  auth: {
    username: "",
    password: "",
  },
  isSubmiting: false,
  showMessage: false,
  errorMsg: "",
};

export const settingsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SETTINGS_TYPES.SET_SETTINGS:
      return { ...state, settingsData: { ...payload } };
    case SETTINGS_TYPES.RESET_SETTINGS:
      return INITIAL_STATE;
    case SETTINGS_TYPES.SET_AUTH:
      return { ...state, auth: { ...payload } };
    case SETTINGS_TYPES.REQUEST_SETTINGS_START:
      return { ...state, isSubmiting: true };
    case SETTINGS_TYPES.REQUEST_SETTINGS_SUCCESS:
      return { ...state, isSubmiting: false, showMessage: true };
    case SETTINGS_TYPES.REQUEST_SETTINGS_FAILED:
      return {
        ...state,
        isSubmiting: false,
        errorMsg: payload,
        showMessage: true,
      };
    case SETTINGS_TYPES.RESET_SHOW_MSG:
      return {
        ...state,
        showMessage: false,
      };
    default:
      return state;
  }
};
