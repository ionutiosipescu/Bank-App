import axios from "axios";
import { setObjPassword } from "./password.action";

// export const requestSettingsStart = () =>
//   createAction(SETTINGS_TYPES.REQUEST_SETTINGS_START);

// export const requestSettingsSuccess = () =>
//   createAction(SETTINGS_TYPES.REQUEST_SETTINGS_SUCCESS);

// export const requestSettingsFailed = (error) =>
//   createAction(SETTINGS_TYPES.REQUEST_SETTINGS_FAILED, error);

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
      // await dispatch(requestSettingsStart());

      // second request get data
      await axios
        .put(`http://localhost:8080/user/edit/credentials`, dataRequest, {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        })
        .then((res) => console.log(res));
      // await dispatch(requestSettingsSuccess());
    } catch (err) {
      console.log(err);
      // const errServer =
      //   "Server is currently unavailable please try again later";
      // dispatch(requestSettingsFailed(errServer));
    }
  };
};
