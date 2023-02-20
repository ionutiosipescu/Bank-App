import axios from "axios";
import {
  setTransferId,
  setTransferArrDb,
  setTransferArr,
  setTransferData,
} from "./transfer.action";
import {
  requests,
  transferComplete,
} from "../../../../utils/Requests/requests";

// Get Arr
export const getTransferArr = (obj, currentUserData) => {
  return async (dispatch) => {
    const id = await setTransferId(obj, currentUserData);
    console.log(id);
    // if (!id) return;
    const { data } = await axios.get(`${requests.GET_HISTORY_TRANSFER}${id}`);
    console.log(data);
    await dispatch(setTransferArrDb(data));
  };
};

// Async Transfer Data
export const fetchTransferData = (
  transferData,
  currentUserData,
  selectedAccount,
  arr
) => {
  return async (dispatch) => {
    await dispatch(setTransferArr(transferData, selectedAccount, arr));
    try {
      const transferDataRequest = await setTransferData(transferData);
      const id = await setTransferId(transferData, currentUserData);
      console.log(id, transferDataRequest);
      await axios
        .post(
          `${requests.POST_CREATE_TRANSFER}${id}${transferComplete.EMAIL}${transferData.email}`,
          transferDataRequest
        )
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };
};
