import { createAction } from "../../../utils/helpers/reducer/reducer.utils";

export const STEP_TYPES = {
  SET_STEP: "SET_STEP",
};

const INITIAL_STATE = 0;

export const stepReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case STEP_TYPES.SET_STEP:
      return payload;
    default:
      return state;
  }
};

export const setStep = (step) => {
  return createAction(STEP_TYPES.SET_STEP, step);
};

export const selectStep = (state) => state.step;
