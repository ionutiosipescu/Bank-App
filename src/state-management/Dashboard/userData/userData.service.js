import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { USER_DATA_TYPES } from "./userData.types";
import axios from "axios";

export const fetchAuthData = (dataObj, userData, authData) => {
  const { id } = userData;
  return async (dispatch) => {
    console.log(dataObj, userData, authData);
    try {
      await axios
        .post(`http://localhost:8080/bank/auth/signin`, authData)
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };
};
