import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { SETTINGS_TYPES } from "./settings.types";
import { setObjSettings } from "./settings.action";
import axios from "axios";

export const fetchSettingsData = (settingsData, userDetail) => {
  return async (dispatch) => {
    await setObjSettings(settingsData, userDetail);
  };
};
