import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { SETTINGS_TYPES } from "./settings.types";
import { setObjSettings } from "./settings.action";
import axios from "axios";

export const fetchAuthData = (dataObj, userData, authData) => {
  return async (dispatch) => {
    console.log(dataObj, userData, authData);
    try {
      const dataRequest = await setObjSettings(dataObj, userData);
      // first request authentication
      const {
        data: { tokenType, accessToken, id },
      } = await axios.post(`http://localhost:8080/bank/auth/signin`, authData);
      console.log(tokenType, accessToken, id);

      // second request get data
      await axios
        .patch(`http://localhost:8080/user/edit?id=${id}`, dataRequest, {
          headers: {
            Authorization: `${tokenType} ${accessToken}`,
          },
        })
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };
};
