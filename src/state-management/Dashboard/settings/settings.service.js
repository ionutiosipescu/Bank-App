import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { SETTINGS_TYPES } from "./settings.types";
import { setObjSettings } from "./settings.action";
import axios from "axios";

export const requestSettingsStart = () =>
  createAction(SETTINGS_TYPES.REQUEST_SETTINGS_START);

export const requestSettingsSuccess = () =>
  createAction(SETTINGS_TYPES.REQUEST_SETTINGS_SUCCESS);

export const requestSettingsFailed = (error) =>
  createAction(SETTINGS_TYPES.REQUEST_SETTINGS_FAILED, error);

export const fetchAuthData = (dataObj, userData, token) => {
  return async (dispatch) => {
    const { id } = userData;
    try {
      const dataRequest = await setObjSettings(dataObj, userData);
      // first request authentication
      await dispatch(requestSettingsStart());
      // second request get data
      await axios
        .patch(`http://localhost:8080/user/edit?id=${id}`, dataRequest, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => console.log(res));
      await dispatch(requestSettingsSuccess());
    } catch (err) {
      console.log(err);
      const errServer =
        "Server is currently unavailable please try again later";
      dispatch(requestSettingsFailed(errServer));
    }
  };
};

export const fetchAuthDataPassword = (dataObj, userData, authData) => {
  return async (dispatch) => {
    console.log(dataObj, userData, authData);
    try {
      // const dataRequest = await setObjSettings(dataObj, userData);
      // first request authentication
      const {
        data: { tokenType, accessToken, id },
      } = await axios.post(`http://localhost:8080/bank/auth/signin`, authData);
      console.log(tokenType, accessToken, id);
      // await dispatch(requestSettingsStart());

      // second request get data
      // await axios
      //   .patch(`http://localhost:8080/user/edit?id=${id}`, dataRequest, {
      //     headers: {
      //       Authorization: `${tokenType} ${accessToken}`,
      //     },
      //   })
      //   .then((res) => console.log(res));
      // await dispatch(requestSettingsSuccess());
    } catch (err) {
      console.log(err);
      // const errServer =
      //   "Server is currently unavailable please try again later";
      // dispatch(requestSettingsFailed(errServer));
    }
  };
};
