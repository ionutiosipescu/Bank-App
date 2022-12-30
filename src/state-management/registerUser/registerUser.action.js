import { REGISTER_ACTION_TYPES } from "./registerUser.types";
import { createAction } from "../../utils/helpers/reducer/reducer.utils";
import { setObjectPlan } from "../registerhelper/registerhelper.actions";
import { useState } from "react";

// User Profile
const updateRegisterUser = (register, e) => {
  const { name, value } = e.target;
  return { ...register, [name]: value };
};

export const setRegisterUser = (register, e) => {
  const user = updateRegisterUser(register, e);
  return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_USER, user);
};

// User Plan Update

// User Plan ADD

export const setRegisterPlanAdd = (previousArrPlan, plan) => {
  const newArrPlan = [...previousArrPlan, { ...plan }];
  return createAction(REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_ADD, newArrPlan);
};

// User Plan Remove

export const setRegisterPlanRemove = (previousArrPlan, plan) => {
  const newArrPlan = [...previousArrPlan].filter(
    (prevArrPlan) => prevArrPlan.currency !== plan.currency
  );
  return createAction(
    REGISTER_ACTION_TYPES.SET_REGISTER_PLAN_REMOVE,
    newArrPlan
  );
};

export const updateRegisterPlanAsync = (chosenPlan, e, ArrPlan) => {
  return async (dispatch) => {
    const { checked } = e.target;
    const planUpdated = await dispatch(setObjectPlan(chosenPlan, e));
    const payloadPlan = await planUpdated.payload;
    if (checked) {
      dispatch(setRegisterPlanAdd(ArrPlan, payloadPlan));
    } else if (!checked) {
      dispatch(setRegisterPlanRemove(ArrPlan, payloadPlan));
    }
  };
};
