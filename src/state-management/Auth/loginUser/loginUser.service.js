import axios from "axios";
import { setCurrentUser } from "../../Dashboard/userData/userData.action";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { LOGIN_ACTION_TYPES } from "./loginUser.types";
import { setToken } from "../registerhelper/registerhelper.actions";
import { controlMoldalAsync } from "./loginUser.action";

export const postLoginStart = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_START);

export const postLoginSuccess = () =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_SUCCESS);

export const postLoginFailed = (error) =>
  createAction(LOGIN_ACTION_TYPES.POST_LOGIN_FAILED, error);

// Async User Login
export const fetchLoginData = (registerData) => {
  return async (dispatch) => {
    try {
      // first request - validate if credentials are corect and a user exist
      // response should be status of account: active or notActive
      const {
        data: { tokenType, accessToken, id },
      } = await axios.post(
        "http://localhost:8080/bank/auth/signin",
        registerData
      );
      // aici va veni in plus fata de ce vine acum un status al contului
      // if(status === active) {
      await dispatch(setToken(`${tokenType} ${accessToken}`));
      await dispatch(postLoginStart());
      const { data } = await axios.post(
        `http://localhost:8080/user/${id}`,
        {},
        {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        }
      );
      if (!data) return;
      await dispatch(setCurrentUser(data));
      await dispatch(postLoginSuccess());
      // }
      // else {
      await dispatch(controlMoldalAsync(true));
      // }
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

export const VerifyOtp = (otp) => {
  return async (dispatch) => {
    try {
      const data = {
        otpnum: otp,
      };
      console.log(data);
      await axios
        .post(`http://localhost:8080/bank/auth/validate`, data)
        .then((res) => console.log(res));
      // if(otp === corect) {
      // const {
      //   data: { tokenType, accessToken, id },
      // } = await axios.post(
      //   "http://localhost:8080/bank/auth/signin",
      //   registerData
      // );
      // await dispatch(setToken(`${tokenType} ${accessToken}`));
      // await dispatch(postLoginStart());
      // const { data } = await axios.post(
      //   `http://localhost:8080/user/${id}`,
      //   {},
      //   {
      //     headers: {
      //       Authorization: `${tokenType} ${accessToken}`,
      //     },
      //   }
      // );
      // if (!data) return;
      // await dispatch(setCurrentUser(data));
      // await dispatch(postLoginSuccess());
      // } else {
      // show error
      // }
    } catch (err) {
      console.log(err);
    }
  };
};

export const ResendOtp = (otp) => {
  return async (dispatch) => {
    try {
      // aici va fi un request pentru a retrimite otp
    } catch (err) {
      console.log(err);
    }
  };
};
