import axios from "axios";
import { setStep } from "../registerhelper/registerhelper.actions";
import { setErrorMessage } from "../registerhelper/registerhelper.actions";
import { REGISTER_ACTION_TYPES } from "./registerUser.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";

export const postRegisterStart = () =>
  createAction(REGISTER_ACTION_TYPES.POST_REGISTER_START);

export const postRegisterSuccess = () =>
  createAction(REGISTER_ACTION_TYPES.POST_REGISTER_SUCCESS);

export const postRegisterFailed = (error) =>
  createAction(REGISTER_ACTION_TYPES.POST_REGISTER_FAILED, error);

// Async User Profile
export const fetchRegisterData = (url, registerData, step) => {
  return async (dispatch) => {
    dispatch(postRegisterStart());
    try {
      const response = await axios.post(url, registerData);
      if (!response.data) return;
      await dispatch(setStep(step + 1));
      setTimeout(() => {
        dispatch(postRegisterSuccess());
      }, 3000);
    } catch (error) {
      if (!error) return;
      const errMsg = error.response.data.message;
      dispatch(postRegisterFailed(errMsg));
    }
  };
};
