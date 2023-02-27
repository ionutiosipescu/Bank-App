import { createAction } from "../../../utils/helpers/reducer/reducer.utils";
import { SETTINGS_TYPES } from "./settings.types";

const updateSettignsForm = (settingsData, e) => {
  const { name, value } = e.target;
  return { ...settingsData, [name]: value };
};

// Update Settings Form
export const setSettingsForm = (settingsData, e) => {
  const settingsObj = updateSettignsForm(settingsData, e);
  return createAction(SETTINGS_TYPES.SET_SETTINGS, settingsObj);
};

// Reset Form
export const resetForm = () => {
  const data = {
    mobile: "",
    address: "",
    firstname: "",
    lastname: "",
  };
  return createAction(SETTINGS_TYPES.SET_SETTINGS, data);
};

// Generate Obj for Request
export const setObjSettings = async (settingsData, userData) => {
  const { userDetail } = userData;
  return { ...userDetail, ...settingsData };
};

export const resetSettings = () => {
  return createAction(SETTINGS_TYPES.RESET_SETTINGS);
};

// Reset Show Message
export const setResetShowMsg = () => {
  return createAction(SETTINGS_TYPES.RESET_SHOW_MSG);
};

// De verificat daca sunt de la Settings sau trebuie sterse
const updateAuthForm = (authData, e) => {
  const { name, value } = e.target;
  return { ...authData, [name]: value };
};
