import { REGISTER_ACTION_TYPES } from "./registerUser.types";

const INITIAL_STATE = {
  testState: null,
};

export const registerReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_ACTION_TYPES.SET_REGISTER_USER:
      return { ...state, testState: payload };
    default:
      return state;
  }
};
