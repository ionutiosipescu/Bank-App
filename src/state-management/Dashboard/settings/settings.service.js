import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { SETTINGS_TYPES } from "./settings.types";
import { setObjSettings } from "./settings.action";
import { requests } from "../../../utils/requests/requests";
import { resetForm } from "./settings.action";
import { setCurrentUser } from "../userData/userData.action";
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
      await dispatch(requestsettingsStart());
      const dataRequest = await setObjSettings(dataObj, userData);
      // update profile data
      await axios
        .patch(`${requests.PATCH_EDIT_PROFILE}${id}`, dataRequest, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => console.log(res));
      // set currentUser with updated data
      const { data } = await axios.post(
        `${requests.POST_USER_DATA}${id}`,
        {},
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (!data) return;
      await dispatch(setCurrentUser(data));
      await dispatch(requestsettingsSuccess());
      await dispatch(resetForm());
    } catch (err) {
      console.log(err);
      if (!err) return;
      const errMsg = err?.response?.data;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestsettingsFailed(errMsg));
      } else {
        dispatch(requestsettingsFailed(errServer));
      }
    }
  };
};
