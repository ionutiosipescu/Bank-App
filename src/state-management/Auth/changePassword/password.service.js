import axios from "axios";
import { setObjPassword } from "./password.action";
import { CHANGE_PASSWORD_TYPES } from "./password.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { requests } from "../../../utils/requests/requests";

export const requestPasswordStart = () =>
  createAction(CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_START);

export const requestPasswordSuccess = () =>
  createAction(CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_SUCCESS);

export const requestPasswordFailed = (error) =>
  createAction(CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_FAILED, error);

export const fetchAuthDataPassword = (dataObj, authData, csrf) => {
  return async (dispatch) => {
    console.log(dataObj, authData);
    try {
      const dataRequest = await setObjPassword(dataObj, authData);
      console.log(dataRequest);
      // first request authentication
      const {
        data: { type, token, id },
      } = await axios.post(`${requests.POST_AUTHENTICATE_USER}`, authData, {
        headers: {
          "X-XSRF-TOKEN": csrf,
        },
      });
      console.log(type, token, id);
      await dispatch(requestPasswordStart());

      // second request get data
      await axios
        .put(`${requests.PUT_CHANGE_PASSWORD}`, dataRequest, {
          headers: {
            Authorization: `${type} ${token}`,
            "X-XSRF-TOKEN": csrf,
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
