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
};

export const settingsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SETTINGS_TYPES.SET_SETTINGS:
      return { ...state, settingsData: { ...payload } };
    case SETTINGS_TYPES.SET_AUTH:
      return { ...state, auth: { ...payload } };

    default:
      return state;
  }
};
