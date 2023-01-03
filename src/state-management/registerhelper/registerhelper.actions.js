import { REGISTER_HELPER_TYPES } from "./registerhelper.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";
import { getLocalStorage } from "../../utils/helpers/localStorage/getLocalStorage";

// SetStep
export const setStep = (step) => {
  return createAction(REGISTER_HELPER_TYPES.SET_STEP, step);
};

// ShowPlans - Toggle(true-flase)
export const setShowPlans = (prevPlans, index) => {
  const newPlans = [...prevPlans];
  newPlans[index].showPlans = !newPlans[index].showPlans;
  return createAction(REGISTER_HELPER_TYPES.SET_PLAN_DATA, newPlans);
};

// SetTypeOfPlan Add
export const setTypeOfPlanAdd = (prevPlans, index, e) => {
  const newPlans = [...prevPlans];
  newPlans[index].typeOfPlan = e.target.value;
  return createAction(REGISTER_HELPER_TYPES.SET_PLAN_DATA, newPlans);
};

// SetTypeOfPlan Remove
export const setTypeOfPlanRemove = (prevPlans, index) => {
  const newPlans = [...prevPlans];
  newPlans[index].typeOfPlan = "";
  return createAction(REGISTER_HELPER_TYPES.SET_PLAN_DATA, newPlans);
};
