import axios from "axios";
import { setCurrentUser } from "../../Dashboard/userData/userData.action";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../../utils/helpers/reducer/reducer.utils";
import { LOGIN_ACTION_TYPES, LoginData, RegisterData } from "./login.types";
import { setToken } from "../register/register.actions";
import { controlMoldalAsync, setEmailValidate } from "./login.action";
import { requests, loginComplete } from "../../../utils/requests/requests";
import { getTransferArr } from "../../Dashboard/services/transfer/transfer.service";
import { setResetFormLogInOtp } from "./login.action";
import { Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../../store";
import { AnyAction } from "redux";
import { SetEmailValidate } from "./login.action";
import { ControlModalOtp } from "./login.action";

export type PostLoginStart = Action<LOGIN_ACTION_TYPES.POST_LOGIN_START>;

export type PostLoginSuccess = Action<LOGIN_ACTION_TYPES.POST_LOGIN_SUCCESS>;

export type PostLoginFailed = ActionWithPayload<
  LOGIN_ACTION_TYPES.POST_LOGIN_FAILED,
  string
>;

export type PostLogIn = PostLoginStart | PostLoginSuccess | PostLoginFailed;

export type RequestLogInOtpStart =
  Action<LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_START>;

export type RequestLogInOtpSuccess =
  Action<LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_SUCCESS>;

export type RequestLogInOtpFailed = ActionWithPayload<
  LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_FAILED,
  string
>;

export type RequestOtp =
  | RequestLogInOtpStart
  | RequestLogInOtpSuccess
  | RequestLogInOtpFailed;

export type fetchAuthDataProps = PostLogIn | SetEmailValidate | ControlModalOtp;

// Login
export const postLoginStart = withMatcher(
  (): PostLoginStart => createAction(LOGIN_ACTION_TYPES.POST_LOGIN_START)
);

export const postLoginSuccess = withMatcher(
  (): PostLoginSuccess => createAction(LOGIN_ACTION_TYPES.POST_LOGIN_SUCCESS)
);

export const postLoginFailed = withMatcher(
  (error: string): PostLoginFailed =>
    createAction(LOGIN_ACTION_TYPES.POST_LOGIN_FAILED, error)
);

// OTP
export const requestLogInOtpStart = withMatcher(
  (): RequestLogInOtpStart =>
    createAction(LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_START)
);

export const requestLogInOtpSuccess = withMatcher(
  (): RequestLogInOtpSuccess =>
    createAction(LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_SUCCESS)
);

export const requestLogInOtpFailed = withMatcher(
  (error: string): RequestLogInOtpFailed =>
    createAction(LOGIN_ACTION_TYPES.REQUEST_LOGIN_OTP_FAILED, error)
);

export const fetchAuthData = (registerData: LoginData): any => {
  return async (dispatch: Dispatch) => {
    const {
      data: { active, type, token, id, email },
    } = await axios.post(`${requests.POST_AUTHENTICATE_USER}`, registerData);
    await dispatch(setEmailValidate(email));
    console.log(active, type, token, id, email);
    if (active) {
      await dispatch(setToken(`${type} ${token}`));
      await dispatch(postLoginStart());
      const { data } = await axios.post(
        `${requests.POST_USER_DATA}${id}`,
        {},
        {
          headers: {
            Authorization: `${type} ${token}`,
          },
        }
      );
      console.log(data);
      if (!data) return;
      await dispatch(setCurrentUser(data));
      await dispatch(postLoginSuccess());
    } else {
      await dispatch(controlMoldalAsync(true));
    }
  };
};

// Async User Login
export const fetchLoginData = (registerData: LoginData) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(fetchAuthData(registerData));
    } catch (error: any) {
      console.log(error);
      if (!error) return;
      const errMsg = error?.response?.data;
      //   If error response from Backend exist, then set the error
      if (errMsg) {
        dispatch(postLoginFailed(errMsg));
      } else {
        // If error response from Backend doesnt exist, set errServer
        const errServer =
          "Server is currently unavailable please try again later";
        dispatch(postLoginFailed(errServer));
      }
    }
  };
};

export const VerifyOtp = (
  otp: number,
  registerData: LoginData,
  email: string
) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(requestLogInOtpStart());
      await axios
        .post(`${requests.POST_VERIFY_OTP}${otp}${loginComplete.EMAIL}${email}`)
        .then((res) => console.log(res));
      await dispatch(fetchAuthData(registerData));
      await dispatch(requestLogInOtpSuccess());
      await dispatch(setResetFormLogInOtp());
    } catch (err: any) {
      if (!err) return;
      console.log(err);
      const errMsg = err?.response?.data;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestLogInOtpFailed(errMsg));
      } else {
        dispatch(requestLogInOtpFailed(errServer));
      }
    }
  };
};

export const ResendOtp = (email: string) => {
  return async (dispatch: Dispatch) => {
    try {
      await dispatch(requestLogInOtpStart());
      await axios
        .post(`${requests.POST_RESEND_OTP}${email}`)
        .then((res) => console.log(res));
      await dispatch(requestLogInOtpSuccess());
    } catch (err: any) {
      console.log(err);
      const errMsg = err?.response?.data;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestLogInOtpFailed(errMsg));
      } else {
        dispatch(requestLogInOtpFailed(errServer));
      }
    }
  };
};
