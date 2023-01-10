import axios from "axios";
import { setStep } from "../registerhelper/registerhelper.actions";

// Async User Profile
export const fetchRegisterData = (url, registerData, step) => {
  return async (dispatch) => {
    try {
      axios.post(url, registerData).then((res) => console.log(res.data));
      dispatch(setStep(step + 1));
    } catch (error) {
      console.log(error);
    }
  };
};
