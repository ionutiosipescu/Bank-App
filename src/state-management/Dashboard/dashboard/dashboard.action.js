import { DASHBOARD_TYPES } from "./dashboard.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";

export const setRedDot = (boolean) => {
  return createAction(DASHBOARD_TYPES.SET_RED_DOT, boolean);
};

export const resetDashboard = () => {
  return createAction(DASHBOARD_TYPES.RESET_DASHBOARD);
};
