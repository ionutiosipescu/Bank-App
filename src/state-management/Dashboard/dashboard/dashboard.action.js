import { DASHBOARD_TYPES } from "./dashboard.types";
import { createAction } from "../../../utils/helpers/reducer/reducer.utils";

export const setRedDot = (boolean) => {
  return createAction(DASHBOARD_TYPES.SET_RED_DOT, boolean);
};

export const setTransferNotificationArrDb = (transferArr) => {
  return createAction(
    DASHBOARD_TYPES.SET_TRANSFER_NOTIFICATION_ARR,
    transferArr
  );
};

export const setNotificationOpen = (boolean) => {
  return createAction(DASHBOARD_TYPES.SET_NOTIFICATION_OPEN, boolean);
};

export const setControlNotification = (transferArr, notificationOpen) => {
  return async (dispatch) => {
    console.log(transferArr, notificationOpen);
    if (transferArr.length >= 1 && notificationOpen === false) {
      await dispatch(setRedDot(true));
    } else {
      await dispatch(setRedDot(false));
    }
  };
};

// Set dark mode
export const setDarkMode = (boolean) => {
  return createAction(DASHBOARD_TYPES.SET_DARK_MODE, boolean);
};

// functia de new transfer new notification
// verifica contul de ron sau euro
// ia arr nou si il ilocuieste pe cel din dashboard
// showRedDot = true
// notificationsOpen = false

export const updateNotificationArr = (newArr) => {
  return createAction(DASHBOARD_TYPES.SET_TRANSFER_NOTIFICATION_ARR, newArr);
};

export const setNotificationTransfer = (newArr) => {
  return async (dispatch) => {
    // before
    // console.log(dataTransferNew, transferRedux);
    // const { transfer, sender } = dataTransferNew;
    // const newObj = {
    //   ...transfer,
    //   from_sender_name: sender,
    // };
    // console.log(newObj);
    // const newArr = [...transferRedux, { ...newObj }];
    // console.log(newArr);
    // after
    await dispatch(updateNotificationArr(newArr));
    await dispatch(setRedDot(true));
    await dispatch(setNotificationOpen(false));
  };
};
export const resetDashboard = () => {
  return createAction(DASHBOARD_TYPES.RESET_DASHBOARD);
};
