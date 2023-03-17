import axios from "axios";
import { REGISTER_TYPES } from "./register.types";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../../utils/helpers/reducer/reducer.utils";
import { setStep } from "./register.actions";
import { requests } from "../../../utils/requests/requests";
import { Dispatch } from "redux";
import { RegisterData } from "./register.types";

export type PostRegisterStart = Action<REGISTER_TYPES.POST_REGISTER_START>;

export type PostRegisterSuccess = Action<REGISTER_TYPES.POST_REGISTER_SUCCESS>;

export type PostRegisterFailed = ActionWithPayload<
  REGISTER_TYPES.POST_REGISTER_FAILED,
  string
>;

export const postRegisterStart = withMatcher(() =>
  createAction(REGISTER_TYPES.POST_REGISTER_START)
);

export const postRegisterSuccess = withMatcher(() =>
  createAction(REGISTER_TYPES.POST_REGISTER_SUCCESS)
);

export const postRegisterFailed = withMatcher((error: string) =>
  createAction(REGISTER_TYPES.POST_REGISTER_FAILED, error)
);

// Async User Profile
export const fetchRegisterMail = (
  registerData: RegisterData,
  step: number
): any => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(postRegisterStart());
      await dispatch(setStep(step + 1));
      console.log(registerData);
      // Post Request
      const response = await axios.post(
        `${requests.POST_SEND_OTP_REGISTER}`,
        registerData
      );
      console.log(response);
      //   Guard Clouse
      if (!response.data) return;
      //   Increment Page
      dispatch(postRegisterSuccess());
    } catch (error: any) {
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
