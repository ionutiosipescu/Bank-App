import { USER_DATA_TYPES } from "./userData.types";

const INITIAL_STATE = {
  userData: {},
};

export const userDataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DATA_TYPES.SET_CURRENT_USER:
      return { ...state, userData: { ...payload } };
    case USER_DATA_TYPES.RESET_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};
