import { REGISTER_HELPER_TYPES } from "./registerhelper.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";
import { getLocalStorage } from "../../utils/helpers/localStorage/getLocalStorage";

// SetStep
export const setStep = (step) => {
  return createAction(REGISTER_HELPER_TYPES.SET_STEP, step);
};

// ShowPlans

export const setShowPlans = (prevPlans, index) => {
  const newPlans = [...prevPlans];
  newPlans[index].showPlans = !newPlans[index].showPlans;
  return createAction(REGISTER_HELPER_TYPES.SHOW_PLANS, newPlans);
  // if true return
  // if false
  // remove from userData Redux
  // typeOfPlan = ""
};

// SetTypeOfPlan Add

// SetTypeOfPlan Remove

// SetTypeOfPlan Controler

export const setTypeOfPlan = (prevPlans, index, e) => {
  const newPlans = [...prevPlans];
  if (prevPlans[index].showPlans) {
    newPlans[index].typeOfPlan = e.target.value;
    return createAction(REGISTER_HELPER_TYPES.SET_TYPE_OF_PLAN, newPlans);
  } else if (!prevPlans[index].showPlans) {
    newPlans[index].typeOfPlan = "";
    return createAction(REGISTER_HELPER_TYPES.SET_TYPE_OF_PLAN, newPlans);
  }
  // after update object with typeOfPlan -> add object to userData Redux Array
};

// // InitPlan

// export const initArrPlans = (currencyArrData) => {
//   return createAction(REGISTER_HELPER_TYPES.INIT_PLAN, currencyArrData);
// };
