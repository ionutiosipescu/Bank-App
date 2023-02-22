import axios from "axios";
import { setObjPassword } from "./password.action";
import { CHANGE_PASSWORD_TYPES } from "./password.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";

export const requestPasswordStart = () =>
  createAction(CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_START);

export const requestPasswordSuccess = () =>
  createAction(CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_SUCCESS);

export const requestPasswordFailed = (error) =>
  createAction(CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_FAILED, error);

export const fetchAuthDataPassword = (dataObj, authData) => {
  return async (dispatch) => {
    console.log(dataObj, authData);
    try {
      const dataRequest = await setObjPassword(dataObj, authData);
      console.log(dataRequest);
      // first request authentication
      const {
        data: { tokenType, accessToken, id },
      } = await axios.post(`http://localhost:8080/bank/auth/signin`, authData);
      console.log(tokenType, accessToken, id);
      await dispatch(requestPasswordStart());

      // second request get data
      await axios
        .put(`http://localhost:8080/user/edit/credentials`, dataRequest, {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        })
        .then((res) => console.log(res));
      await dispatch(requestPasswordSuccess());
    } catch (err) {
      console.log(err);
      const errServer =
        "Server is currently unavailable please try again later";
      dispatch(requestPasswordFailed(errServer));
    }
  };
};
