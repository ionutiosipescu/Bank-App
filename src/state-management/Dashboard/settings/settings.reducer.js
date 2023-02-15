import { SETTINGS_TYPES } from "./settings.types";

const INITIAL_STATE = {
  settingsData: {
    mobile: "",
    address: "",
    first_name: "",
    last_name: "",
  },
};

export const settingsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SETTINGS_TYPES.SET_SETTINGS:
      return { ...state, settingsData: { ...payload } };
    default:
      return state;
  }
};
