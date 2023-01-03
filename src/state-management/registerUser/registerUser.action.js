import { REGISTER_ACTION_TYPES } from "./registerUser.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";
import { setObjectPlan } from "../registerhelper/registerhelper.actions";
import { useState } from "react";
import { setTypeOfPlan } from "../registerhelper/registerhelper.actions";
import { setShowPlans } from "../registerhelper/registerhelper.actions";

// User Profile
const updateRegisterUser = (register, e) => {
  const { name, value } = e.target;
  return { ...register, [name]: value };
};

export const setRegisterUser = (register, e) => {
  const user = updateRegisterUser(register, e);
  return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_USER, user);
};

// User Plan ADD

export const setRegisterPlanAdd = (userDataArrPlan, prevPlans, index) => {
  const newArrPlan = [...userDataArrPlan, { ...prevPlans[index] }];
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

// Async Radio Plan
export const updateRegisterPlanAsync = (
  userDataArrPlan,
  prevPlans,
  index,
  e
) => {
  return async (dispatch) => {
    dispatch(setTypeOfPlan(prevPlans, index, e));
    dispatch(setRegisterPlanAdd(userDataArrPlan, prevPlans, index));
  };
};

// Async Checkbox Plan

export const updateRegisterPlanCheckboxAsync = (
  userDataArrPlan,
  prevPlans,
  index,
  e
) => {
  return async (dispatch) => {
    dispatch(setShowPlans(prevPlans, index));
    if (prevPlans[index].showPlans) return;
    if (!prevPlans[index].showPlans) {
      dispatch(setRegisterPlanRemove(userDataArrPlan, prevPlans, index));
      dispatch(setTypeOfPlan(prevPlans, index, e));
    }
  };
};

// // User Plan Update

// // User Plan ADD

// export const setRegisterPlanAdd = (previousArrPlan, plan) => {
//   const newArrPlan = [...previousArrPlan, { ...plan }];
//   return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_ADD, newArrPlan);
// };

// // User Plan Remove

// export const setRegisterPlanRemove = (previousArrPlan, plan) => {
//   const newArrPlan = [...previousArrPlan].filter(
//     (prevArrPlan) => prevArrPlan.currency !== plan.currency
//   );
//   return createAction(
//     REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_REMOVE,
//     newArrPlan
//   );
// };

// export const updateRegisterPlanAsync = (chosenPlan, e, ArrPlan) => {
//   return async (dispatch) => {
//     const { checked } = e.target;
//     const planUpdated = await dispatch(setObjectPlan(chosenPlan, e));
//     const payloadPlan = await planUpdated.payload;
//     if (checked) {
//       dispatch(setRegisterPlanAdd(ArrPlan, payloadPlan));
//     } else if (!checked) {
//       dispatch(setRegisterPlanRemove(ArrPlan, payloadPlan));
//     }
//   };
// };
