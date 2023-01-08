import { REGISTER_HELPER_TYPES } from "./registerhelper.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";
import { getLocalStorage } from "../../utils/helpers/localStorage/getLocalStorage";

// SetStep
export const setStep = (step) => {
  return createAction(REGISTER_HELPER_TYPES.SET_STEP, step);
};

// SetTypeOfPlan Add in registerhelper.reducer
export const setTypeOfPlanAdd = (prevPlans, index, e) => {
  const newPlans = [...prevPlans];
  newPlans[index].typeOfPlan = e.target.value;
  return createAction(REGISTER_HELPER_TYPES.SET_PLAN_DATA, newPlans);
};

// User Profile
const updateRegisterUser = (register, e) => {
  const { name, value } = e.target;
  return { ...register, [name]: value };
};

export const setRegisterUser = (register, e) => {
  const user = updateRegisterUser(register, e);
  return createAction(REGISTER_HELPER_TYPES.SET_USER_DATA, user);
};
