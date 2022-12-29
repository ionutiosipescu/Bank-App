import { REGISTER_HELPER_TYPES } from "./registerhelper.types";

const INITIAL_STATE = {
  // registerLS: {},
  // registerError: null,
  step: 0,
};

export const registerHelperReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_HELPER_TYPES.SET_STEP:
      return { ...state, step: payload };
    // case REGISTER_HELPER_TYPES.FETCH_REGISTER_SUCCESS:
    //   return { ...state, registerLS: { ...payload } };
    // case REGISTER_HELPER_TYPES.FETCH_REGISTER_FAILED:
    //   return { ...state, registerError: payload };
    default:
      return state;
  }
};