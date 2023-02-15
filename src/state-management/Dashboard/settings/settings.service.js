import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { SETTINGS_TYPES } from "./settings.types";
import { setObjSettings } from "./settings.action";
import axios from "axios";

export const fetchSettingsData = (settingsData, userData) => {
  const { id } = userData;
  return async (dispatch) => {
    try {
      const dataSettings = await setObjSettings(settingsData, userData);
      console.log(dataSettings);
      const { data } = await axios.post(`http://localhost:8080/user/98`);
      console.log(data);
      // await axios
      //   .put(`http://localhost:8080/user/edit?id=${id}`, {}, data)
      //   .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };
};
