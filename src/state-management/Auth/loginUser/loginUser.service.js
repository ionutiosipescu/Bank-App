import axios from "axios";
import { setCurrentUser } from "../../Dashboard/userData/userData.action";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { LOGIN_ACTION_TYPES } from "./loginUser.types";
import { setToken } from "../registerhelper/registerhelper.actions";
import { controlMoldalAsync, setEmailValidate } from "./loginUser.action";

export const postLoginStart = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_START);

export const postLoginSuccess = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_SUCCESS);

export const postLoginFailed = (error) =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_FAILED, error);

export const fetchAuthData = (registerData) => {
  return async (dispatch) => {
    const {
      data: { active, type, token, id, email },
    } = await axios.post(
      "http://localhost:8080/bank/auth/signin",
      registerData
    );
    await dispatch(setEmailValidate(email));
    console.log(active, type, token, id, email);
    if (active) {
      await dispatch(setToken(`${type} ${token}`));
      await dispatch(postLoginStart());
      const { data } = await axios.post(
        `http://localhost:8080/user/${id}`,
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
export const fetchLoginData = (registerData) => {
  return async (dispatch) => {
    try {
      await dispatch(fetchAuthData(registerData));
    } catch (error) {
      if (!error) return;
      const errMsg = error?.response?.data?.message;
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

export const VerifyOtp = (otp, registerData, email) => {
  return async (dispatch) => {
    try {
      await axios
        .post(
          `http://localhost:8080/bank/auth/validate?otpnum=${otp}&email=${email}`
        )
        .then((res) => console.log(res));
      await dispatch(fetchAuthData(registerData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const ResendOtp = (email) => {
  return async (dispatch) => {
    try {
      await axios.post(
        `http://localhost:8080/bank/auth/resend/otp?email=${email}`
      );
    } catch (err) {
      console.log(err);
    }
  };
};
