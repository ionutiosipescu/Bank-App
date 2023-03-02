import { DASHBOARD_TYPES } from "./dashboard.types";

const INITIAL_STATE = {
  showRedDot: false,
  notificationsOpen: false,
  transferNotificationArr: [],
  darkMode: false,
};

export const dashboardReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case DASHBOARD_TYPES.SET_RED_DOT:
      return { ...state, showRedDot: payload, notificationsOpen: true };
    case DASHBOARD_TYPES.SET_NOTIFICATION_OPEN:
      return { ...state, notificationsOpen: payload };
    case DASHBOARD_TYPES.SET_TRANSFER_NOTIFICATION_ARR:
      return { ...state, transferNotificationArr: [...payload] };
    case DASHBOARD_TYPES.SET_DARK_MODE:
      return { ...state, darkMode: payload };
    case DASHBOARD_TYPES.RESET_DASHBOARD:
      return INITIAL_STATE;
    default:
      return state;
  }
};
