import axios from "axios";
import {
  setTransferId,
  setTransferArrDb,
  setTransferArr,
  setTransferData,
  setResetFormTransfer,
} from "./transfer.action";
import {
  requests,
  transferComplete,
} from "../../../../utils/Requests/requests";
import { createAction } from "../../../../utils/helpers/reducer/reducer.utils";
import { TRANSFER_TYPES } from "./transfer.types";

export const requestTransferStart = () =>
  createAction(TRANSFER_TYPES.REQUEST_TRANSFER_START);

export const requestTransferSuccess = () =>
  createAction(TRANSFER_TYPES.REQUEST_TRANSFER_SUCCESS);

export const requestTransferFailed = (error) =>
  createAction(TRANSFER_TYPES.REQUEST_TRANSFER_FAILED, error);

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
export const fetchTransferData = (transferRedux, currentUserData) => {
  const { transferForm } = transferRedux;
  return async (dispatch) => {
    try {
      await dispatch(requestTransferStart());
      await dispatch(setTransferArr(transferRedux));
      const transferDataRequest = await setTransferData(transferForm);
      const id = await setTransferId(transferForm, currentUserData);
      console.log(id, transferDataRequest);
      await axios
        .post(
          `${requests.POST_CREATE_TRANSFER}${id}${transferComplete.EMAIL}${transferForm.email}`,
          transferDataRequest
        )
        .then((res) => console.log(res));
      await dispatch(requestTransferSuccess());
      await dispatch(setResetFormTransfer());
    } catch (err) {
      if (!err) return;
      const errMsg = err?.response?.data?.message;
      const errServer =
        "Server is currently unavailable please try again later";
      if (errMsg) {
        dispatch(requestTransferFailed(errMsg));
      } else {
        dispatch(requestTransferFailed(errServer));
      }
    }
  };
};
