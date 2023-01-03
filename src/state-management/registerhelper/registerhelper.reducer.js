import { REGISTER_HELPER_TYPES } from "./registerhelper.types";

const INITIAL_STATE = {
  planData: [
    {
      typeOfPlan: "",
      currency: "ron",
      namePlan: "Ron",
      currentBallance: "",
      showPlans: false,
    },
    {
      typeOfPlan: "",
      currency: "euro",
      namePlan: "Euro",
      currentBallance: "",
      showPlans: false,
    },
  ],
  step: 0,
};

export const registerHelperReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_HELPER_TYPES.SET_STEP:
      return { ...state, step: payload };
    case REGISTER_HELPER_TYPES.INIT_PLAN:
      return { ...state, planData: [...payload] };
    case REGISTER_HELPER_TYPES.SHOW_PLANS:
      return { ...state, planData: [...payload] };
    case REGISTER_HELPER_TYPES.SET_TYPE_OF_PLAN:
      return { ...state, planData: [...payload] };
    default:
      return state;
  }
};
