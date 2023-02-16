import { USER_DATA_TYPES } from "./userData.types";

const INITIAL_STATE = {
  userData: {},
};

export const userDataReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_DATA_TYPES.SET_CURRENT_USER:
      return { ...state, userData: { ...payload } };

    default:
      return state;
  }
};
