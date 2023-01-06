import { REGISTER_ACTION_TYPES } from "./registerUser.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";
import { setObjectPlan } from "../registerhelper/registerhelper.actions";
import { useState } from "react";
import { setTypeOfPlan } from "../registerhelper/registerhelper.actions";
import { setShowPlans } from "../registerhelper/registerhelper.actions";
import { setTypeOfPlanAdd } from "../registerhelper/registerhelper.actions";
import { setTypeOfPlanRemove } from "../registerhelper/registerhelper.actions";

// User Profile
const updateRegisterUser = (register, e) => {
  const { name, value } = e.target;
  return { ...register, [name]: value };
};

export const setRegisterUser = (register, e) => {
  const user = updateRegisterUser(register, e);
  return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_USER, user);
};

// UserPlan

// User Plan Add

export const setRegisterPlanAdd = (userDataArrPlan, prevPlans, index) => {
  const { typeOfPlan, currency, currentBallance } = prevPlans[index];
  const cleanPlan = {
    typeOfPlan: typeOfPlan,
    currency: currency,
    currentBallance: currentBallance,
  };
  const newArrPlan = [...userDataArrPlan, { ...cleanPlan }];
  return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_ADD, newArrPlan);
};

// User Plan Remove

export const setRegisterPlanRemove = (userDataArrPlan, prevPlans, index) => {
  const newArrPlan = [...userDataArrPlan].filter(
    (prevArrPlan) => prevArrPlan.currency !== prevPlans[index].currency
  );
  return createAction(
    REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_REMOVE,
    newArrPlan
  );
};

// User Remove Duplicates

export const setRegisterPlanRemoveDuplicates = (
  userDataArrPlan,
  prevPlans,
  index
) => {
  const newArrPlan = [...userDataArrPlan].filter(
    (prevArrPlan) => prevArrPlan.currency !== prevPlans[index].currency
  );
  return newArrPlan;
};

// Async Radio Plan
export const updateRegisterPlanAsync = (
  userDataArrPlan,
  prevPlans,
  index,
  e
) => {
  return async (dispatch) => {
    const indicator = prevPlans[index].currency;
    const validator = userDataArrPlan.some((el) => el.currency === indicator);

    // if plan(ron or euro) exist in Redux
    // provide an empty arr
    // setTypeOfPlan in Redux Helper
    // add only ONE last updated plan in Redux

    if (validator) {
      const newUserDataArrPlan = await setRegisterPlanRemoveDuplicates(
        userDataArrPlan,
        prevPlans,
        index
      );

      // update typeOfPlan in registerPlanData in registerhelper.reducer
      dispatch(setTypeOfPlanAdd(prevPlans, index, e));
      // update UserPlan in Redux with currentPlan from registerPlanData
      dispatch(setRegisterPlanAdd(newUserDataArrPlan, prevPlans, index));
    } else {
      // update typeOfPlan in registerPlanData in registerhelper.reducer
      dispatch(setTypeOfPlanAdd(prevPlans, index, e));
      // update UserPlan in Redux with currentPlan from registerPlanData
      dispatch(setRegisterPlanAdd(userDataArrPlan, prevPlans, index));
    }
  };
};

// Async Checkbox Plan
export const updateRegisterPlanCheckboxAsync = (
  userDataArrPlan,
  prevPlans,
  index
) => {
  return async (dispatch) => {
    // update showPlans in registerPlanData
    dispatch(setShowPlans(prevPlans, index));
    if (prevPlans[index].showPlans) return;
    if (!prevPlans[index].showPlans) {
      // update typeOfPlan in registerPlanData
      dispatch(setTypeOfPlanRemove(prevPlans, index));
      // update UserPlan in Redux with currentPlan from registerPlanData
      dispatch(setRegisterPlanRemove(userDataArrPlan, prevPlans, index));
    }
  };
};
