import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { SETTINGS_TYPES } from "./settings.types";
import { setObjSettings } from "./settings.action";
import { requests } from "../../../utils/requests/requests";
import axios from "axios";

export const requestsettingsStart = () =>
  createAction(SETTINGS_TYPES.REQUEST_SETTINGS_START);

export const requestsettingsSuccess = () =>
  createAction(SETTINGS_TYPES.REQUEST_SETTINGS_SUCCESS);

export const requestsettingsFailed = (error) =>
  createAction(SETTINGS_TYPES.REQUEST_SETTINGS_FAILED, error);

export const fetchAuthData = (dataObj, userData, token) => {
  return async (dispatch) => {
    const { id } = userData;
    try {
      const dataRequest = await setObjSettings(dataObj, userData);
      // first request authentication
      await dispatch(requestsettingsStart());
      // second request get data
      await axios
        .patch(`${requests.PATCH_EDIT_PROFILE}${id}`, dataRequest, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => console.log(res));
      await dispatch(requestsettingsSuccess());
    } catch (err) {
      console.log(err);
      const errServer =
        "Server is currently unavailable please try again later";
      dispatch(requestsettingsFailed(errServer));
    }
  };
};
