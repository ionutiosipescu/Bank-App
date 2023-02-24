import axios from "axios";
import { REGISTER_HELPER_TYPES } from "./registerhelper.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { setStep } from "./registerhelper.actions";

export const postRegisterStart = () =>
  createAction(REGISTER_HELPER_TYPES.POST_REGISTER_START);

export const postRegisterSuccess = () =>
  createAction(REGISTER_HELPER_TYPES.POST_REGISTER_SUCCESS);

export const postRegisterFailed = (error) =>
  createAction(REGISTER_HELPER_TYPES.POST_REGISTER_FAILED, error);

// Async User Profile
export const fetchRegisterMail = (registerData, step) => {
  return async (dispatch) => {
    try {
      dispatch(postRegisterStart());
      await dispatch(setStep(step + 1));
      console.log(registerData);
      // Post Request
      const response = await axios.post(
        `http://localhost:8080/bank/auth/otp`,
        registerData
      );
      console.log(response);
      //   Guard Clouse
      if (!response.data) return;
      //   Increment Page
      dispatch(postRegisterSuccess());
    } catch (error) {
      if (!error) return;
      const errMsg = error?.response?.data?.message;
      //   If error response from Backend exist, then set the error
      if (errMsg) {
        dispatch(postRegisterFailed(errMsg));
      } else {
        // If error response from Backend doesnt exist, set errServer
        const errServer =
          "Server is currently unavailable please try again later";
        dispatch(postRegisterFailed(errServer));
      }
    }
  };
};
