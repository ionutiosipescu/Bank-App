import { REGISTER_HELPER_TYPES } from "./registerhelper.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";

// SetStep
export const setStep = (step) => {
  return createAction(REGISTER_HELPER_TYPES.SET_STEP, step);
};

// Set planData -> typeOfPlan
export const setTypeOfPlanAdd = (prevPlans, index, e) => {
  const newPlans = [...prevPlans];
  newPlans[index].typeOfPlan = e.target.value;
  return createAction(REGISTER_HELPER_TYPES.SET_PLAN_DATA, newPlans);
};

// Set userProfile
const updateRegisterUser = (register, e) => {
  const { name, value } = e.target;
  return { ...register, [name]: value };
};

export const setRegisterUser = (register, e) => {
  const user = updateRegisterUser(register, e);
  return createAction(REGISTER_HELPER_TYPES.SET_USER_DATA, user);
};

// Error Message
export const setErrorMessage = (errorMessage) => {
  return createAction(REGISTER_HELPER_TYPES.SET_ERROR_MESSAGE, errorMessage);
};

// Error
export const setError = () => {
  const error = "Request has been failed";
  return createAction(REGISTER_HELPER_TYPES.SET_REQUEST_FAILED, error);
};
