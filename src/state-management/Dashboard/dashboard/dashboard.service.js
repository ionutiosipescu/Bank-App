import { requests } from "../../../utils/requests/requests";
import { setTransferId } from "../services/transfer/transfer.action";
import {
  setTransferNotificationArrDb,
  setRedDot,
  setControlNotification,
} from "./dashboard.action";
import axios from "axios";

// Get Arr
export const getTransferArrNotifications = (
  currentUserData,
  notificationOpen
) => {
  return async (dispatch) => {
    const id = await setTransferId({ account: "ron" }, currentUserData);
    const { data } = await axios.get(`${requests.GET_HISTORY_TRANSFER}${id}`);
    console.log(data);
    await dispatch(setTransferNotificationArrDb(data));
    await dispatch(setControlNotification(data, notificationOpen));
  };
};
