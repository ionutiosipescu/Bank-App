import axios from "axios";
import { setStep } from "../registerhelper/registerhelper.actions";
import { setError } from "../registerhelper/registerhelper.actions";
import { setErrorMessage } from "../registerhelper/registerhelper.actions";

// Async User Profile
export const fetchRegisterData = (url, registerData, step) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(url, registerData);
      console.log(response.data);
      if (response.data === "Success") {
        dispatch(setStep(step + 1));
      } else if (
        response.data === "Username is already taken!" ||
        "Email is already in use!"
      ) {
        dispatch(setErrorMessage(response.data));
      } else return;
    } catch (error) {
      dispatch(setError(error));
      console.log(error);
    }
  };
};
