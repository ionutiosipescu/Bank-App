import { REGISTER_HELPER_TYPES } from "./registerhelper.types";

const INITIAL_STATE = {
  planData: {
    typeOfPlanRo: "",
    currency: "",
    currentBallance: "",
  },
  step: 0,
};

export const registerHelperReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_HELPER_TYPES.SET_STEP:
      return { ...state, step: payload };
    case REGISTER_HELPER_TYPES.SET_PLAN:
      return { ...state, planData: { ...payload } };
    default:
      return state;
  }
};
