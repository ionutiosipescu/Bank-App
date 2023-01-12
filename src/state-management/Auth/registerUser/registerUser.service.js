import axios from "axios";
import { setStep } from "../registerhelper/registerhelper.actions";
import { setErrorMessage } from "../registerhelper/registerhelper.actions";

// Async User Profile
export const fetchRegisterData = (url, registerData, step) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(url, registerData);
      if (!response.data) return;
      dispatch(setStep(step + 1));
    } catch (error) {
      const errMsg = error.response.data.message;
      dispatch(setErrorMessage(errMsg));
      console.log(error.response.data.message);
    }
  };
};
