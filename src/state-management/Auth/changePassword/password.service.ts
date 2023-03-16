import axios from "axios";
import { setObjPassword } from "./password.action";
import { CHANGE_PASSWORD_TYPES } from "./password.types";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../../utils/helpers/reducer/reducer.utils";
import { requests } from "../../../utils/requests/requests";
import { SetPasswordProps } from "./password.types";
import { Dispatch } from "redux";

export type RequestPasswordStart =
  Action<CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_START>;

export type RequestPasswordSuccess =
  Action<CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_SUCCESS>;

export type RequestPasswordFailed = ActionWithPayload<
  CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_FAILED,
  string
>;

export const requestPasswordStart = withMatcher(
  (): RequestPasswordStart =>
    createAction(CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_START)
);

export const requestPasswordSuccess = withMatcher(
  (): RequestPasswordSuccess =>
    createAction(CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_SUCCESS)
);

export const requestPasswordFailed = withMatcher(
  (error: string): RequestPasswordFailed =>
    createAction(CHANGE_PASSWORD_TYPES.REQUEST_PASSWORD_FAILED, error)
);

export const fetchAuthDataPassword = ({
  dataObj,
  authData,
}: SetPasswordProps) => {
  return async (dispatch: Dispatch) => {
    console.log(dataObj, authData);
    try {
      const dataRequest = await setObjPassword(dataObj, authData);
      console.log(dataRequest);
      // first request authentication
      const {
        data: { type, token, id },
      } = await axios.post(`${requests.POST_AUTHENTICATE_USER}`, authData);
      console.log(type, token, id);
      await dispatch(requestPasswordStart());

      // second request get data
      await axios
        .put(`${requests.PUT_CHANGE_PASSWORD}`, dataRequest, {
          headers: {
            Authorization: `${type} ${token}`,
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
